import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import { RenderAPI, fireEvent, waitFor } from "@testing-library/react-native";
import { renderWithProviders } from "../../../../src/utils/tests/renderWithProviders";
import { launchesMock } from "../../../../src/__mocks__/launches";
import { store } from "../../../../src/state/store";
import { LaunchesLoader } from "../Launches.loader";

const waitForLoadingToFinish = async (tree: RenderAPI) => {
  await waitFor(() => {
    expect(tree.queryByText("Loading")).toBeNull();
  });
};

export const handlers = [
  http.get(
    "https://api.spacexdata.com/v3/launches/past",
    async () => {
      await delay(150);
      return Response.error();
    },
    { once: true }
  ),
  http.get("https://api.spacexdata.com/v3/launches/past", async () => {
    await delay(150);
    return HttpResponse.json(launchesMock);
  }),
];

const server = setupServer(...handlers);

describe("LaunchesLoader", () => {
  let tree: RenderAPI;

  beforeAll(() => server.listen());

  beforeEach(() => {
    server.resetHandlers();
    tree = renderWithProviders(<LaunchesLoader />, { store });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => server.close());

  describe("when the request fails and the user clicks on retry", () => {
    it("retries the request", async () => {
      await waitForLoadingToFinish(tree);

      expect(tree.getByText("Something went wrong")).toBeDefined();

      fireEvent.press(tree.getByText("Retry"));

      await waitFor(() => {
        expect(tree.getByText("Loading")).toBeDefined();
      });

      await waitForLoadingToFinish(tree);

      expect(tree.getByText("Crew-1")).toBeDefined();
      expect(tree.getByText("Crew-0")).toBeDefined();
      expect(tree.getByText("2019-11-15T19:27:00-05:00")).toBeDefined();
      expect(tree.getByText("2020-11-15T19:27:00-05:00")).toBeDefined();
    });
  });

  it("shows a loading and then renders the launches list when data is fetched", async () => {
    await waitForLoadingToFinish(tree);

    expect(tree.getByText("Crew-1")).toBeDefined();
    expect(tree.getByText("Crew-0")).toBeDefined();
    expect(tree.getByText("2019-11-15T19:27:00-05:00")).toBeDefined();
    expect(tree.getByText("2020-11-15T19:27:00-05:00")).toBeDefined();
  });
});
