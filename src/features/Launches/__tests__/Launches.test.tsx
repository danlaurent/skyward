import { Launches } from "../Launches";
import { RenderAPI, fireEvent, render } from "@testing-library/react-native";
import { router } from "expo-router";
import { launchesMock } from "../../../__mocks__/launches";
import { renderWithProviders } from "../../../utils/tests/renderWithProviders";
import { store } from "../../../state/store";

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

describe("Launches", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = renderWithProviders(<Launches launches={launchesMock} />, { store });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the launches list", () => {
    const { getByText, getByTestId } = tree;

    const missionName = getByText("Crew-1");
    const itemSeparator = getByTestId("itemSeparator");
    const listFooter = getByTestId("listFooter");

    expect(missionName).toBeDefined();
    expect(itemSeparator).toBeDefined();
    expect(listFooter).toBeDefined();
  });

  describe("when a launch is pressed", () => {
    it("navigates to the launch details", () => {
      const { getByTestId } = tree;

      const launch = getByTestId("launch-107");
      fireEvent.press(launch);

      expect(router.push).toHaveBeenCalledWith("launchDetails/107");
    });
  });
});
