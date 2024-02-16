import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import { RenderAPI, fireEvent, waitFor } from "@testing-library/react-native";
import { renderWithProviders } from "../../../src/utils/tests/renderWithProviders";
import { launchesMock } from "../../../src/__mocks__/launches";
import { store } from "../../../src/state/store";
import { LaunchDetailsLoader } from "../LaunchDetails.loader";
import * as expoRouter from "expo-router";

const mockFlightNumberParam = (flightNumber: string) => {
  jest.spyOn(expoRouter, "useLocalSearchParams").mockReturnValue({
    flightNumber,
  });
};

const waitForLoadingToFinish = async (tree: RenderAPI) => {
  await waitFor(() => {
    expect(tree.queryByText("Loading")).toBeNull();
  });
};

export const handlers = [
  http.get("https://api.spacexdata.com/v3/launches/107", async () => {
    await delay(150);
    return HttpResponse.json(launchesMock[0]);
  }),
  http.get("https://api.spacexdata.com/v3/launches/108", async () => {
    await delay(150);
    return Response.error();
  }),
  http.get("https://api.spacexdata.com/v3/launches/109", async () => {
    await delay(150);
    return Response.error();
  }),
];

const server = setupServer(...handlers);

describe("LaunchDetailsLoader", () => {
  let tree: RenderAPI;

  beforeAll(() => server.listen());

  afterEach(() => {
    server.resetHandlers();
    jest.clearAllMocks();
  });

  afterAll(() => server.close());

  beforeEach(() => {
    mockFlightNumberParam("107");
    tree = renderWithProviders(<LaunchDetailsLoader />, { store });
  });

  describe("when loading", () => {
    it("shows a loading state", async () => {
      expect(tree.getByText("Loading")).toBeDefined();
    });
  });

  describe("when the request fails and the user clicks on retry", () => {
    it("retries the request", async () => {
      mockFlightNumberParam("109");
      await waitForLoadingToFinish(tree);

      expect(tree.getByText("Something went wrong")).toBeDefined();

      fireEvent.press(tree.getByText("Retry"));

      await waitFor(() => {
        expect(tree.getByText("Loading")).toBeDefined();
      });
    });
  });

  it("renders the launch details when data is fetched", async () => {
    await waitForLoadingToFinish(tree);

    expect(tree.getByText("Crew-1")).toBeDefined();
    expect(tree.getByText("2020-11-15T19:27:00-05:00")).toBeDefined();
    expect(
      tree.getByText("Kennedy Space Center Historic Launch Complex 39A")
    ).toBeDefined();
    expect(tree.getByText("Falcon 9")).toBeDefined();
    expect(tree.getByText("SpaceX")).toBeDefined();
  });
});
