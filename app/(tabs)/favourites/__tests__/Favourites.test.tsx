import { RenderAPI, fireEvent, render } from "@testing-library/react-native";
import { Favourites } from "../Favourites";
import { launchesMock } from "../../../../src/__mocks__/launches";
import { router } from "expo-router";
import { mockUseFavourites } from "../../../../src/hooks/useFavourites/__mocks__/mockUseFavourites";

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

describe("Favourites", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    mockUseFavourites({
      favouriteFlightNumbers: [
        launchesMock[0].flight_number,
        launchesMock[1].flight_number,
      ],
      favouriteLaunches: launchesMock,
    });

    tree = render(<Favourites favourites={launchesMock} />);
  });

  it("should render the list of favourite launches", () => {
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
