import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import { RenderAPI, fireEvent, waitFor } from "@testing-library/react-native";
import { renderWithProviders } from "../../../utils/tests/renderWithProviders";
import { launchesMock } from "../../../__mocks__/launches";
import { store } from "../../../state/store";
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
  http.get(
    "https://api.spacexdata.com/v3/launches/107",
    async () => {
      await delay(150);
      return Response.error();
    },
    { once: true }
  ),
  http.get("https://api.spacexdata.com/v3/launches/107", async () => {
    await delay(150);
    return HttpResponse.json(launchesMock[0]);
  }),
];

const server = setupServer(...handlers);

describe("LaunchDetailsLoader", () => {
  let tree: RenderAPI;

  beforeAll(() => {
    jest.useFakeTimers();
    server.listen();
  });

  beforeEach(() => {
    server.resetHandlers();
    mockFlightNumberParam("107");
    tree = renderWithProviders(<LaunchDetailsLoader />, { store });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    server.close();
  });

  describe("when the request fails and the user clicks on retry", () => {
    it("retries the request", async () => {
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
    expect(tree.getByText("November 16, 2020 1:27 AM")).toBeDefined();
    expect(
      tree.getByText("Kennedy Space Center Historic Launch Complex 39A")
    ).toBeDefined();
    expect(tree.getByText("Falcon 9")).toBeDefined();
    expect(tree.getByText("SpaceX")).toBeDefined();
  });
});
