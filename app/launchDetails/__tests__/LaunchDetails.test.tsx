import { RenderAPI, fireEvent } from "@testing-library/react-native";
import { LaunchDetails } from "../LaunchDetails";
import { launchesMock } from "../../../src/__mocks__/launches";
import { renderWithProviders } from "../../../src/utils/tests/renderWithProviders";
import { store } from "../../../src/state/store";
import { mockUseFavourites } from "../../../src/hooks/useFavourites/__mocks__/mockUseFavourites";

const launchMock = launchesMock[0];
const toggleFavouritesMock = jest.fn();

describe("LaunchDetails", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    mockUseFavourites({ toggleFavourites: toggleFavouritesMock });
    tree = renderWithProviders(<LaunchDetails launch={launchMock} />, {
      store,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the launch details", () => {
    const { getByText } = tree;

    const missionName = getByText(launchMock.mission_name);
    const missionDate = getByText("November 16, 2020 1:27 AM");
    const launchSite = getByText(launchMock.launch_site.site_name_long);
    const rocket = getByText(launchMock.rocket.rocket_name);

    expect(missionName).toBeDefined();
    expect(missionDate).toBeDefined();
    expect(launchSite).toBeDefined();
    expect(rocket).toBeDefined();
  });

  describe("when the favourite icon is pressed", () => {
    it("calls the toggleFavourites function", () => {
      const favouriteIcon = tree.getByTestId("FavouriteIcon");
      fireEvent.press(favouriteIcon);

      expect(toggleFavouritesMock).toHaveBeenCalledWith(launchMock);
    });
  });
});
