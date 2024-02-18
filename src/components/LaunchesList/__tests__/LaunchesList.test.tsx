import { RenderAPI, fireEvent, render } from "@testing-library/react-native";
import { LaunchesList } from "../LaunchesList";
import { launchesMock } from "../../../__mocks__/launches";
import { mockUseFavourites } from "../../../hooks/useFavourites/__mocks__/mockUseFavourites";

const onCardPressMock = jest.fn();
const onFavouritePressMock = jest.fn();

describe("LaunchesList", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    mockUseFavourites({
      favouriteFlightNumbers: [107],
      toggleFavourites: onFavouritePressMock,
    });
    tree = render(
      <LaunchesList
        launches={launchesMock}
        onCardPress={onCardPressMock}
        emptyListText="Empty List Text Mock"
      />
    );
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

  it("should call the onLaunchPress function when the launch card is pressed", () => {
    const missionName = tree.getByText("Crew-1");

    fireEvent.press(missionName);
    expect(onCardPressMock).toHaveBeenCalledTimes(1);
  });

  describe("when the list is empty", () => {
    beforeEach(() => {
      tree = render(
        <LaunchesList
          launches={[]}
          onCardPress={onCardPressMock}
          emptyListText="Empty List Text Mock"
        />
      );
    });

    it("should render the empty list text", () => {
      const emptyTextContainer = tree.getByTestId("emptyText");
      const emptyText = tree.getByText("Empty List Text Mock");

      expect(emptyTextContainer).toBeDefined();
      expect(emptyText).toBeDefined();
    });

    it("should render the default empty list text if no text is provided", () => {
      tree = render(<LaunchesList onCardPress={jest.fn()} launches={[]} />);
      const emptyTextContainer = tree.getByTestId("emptyText");
      const emptyText = tree.getByText("No launches found");

      expect(emptyTextContainer).toBeDefined();
      expect(emptyText).toBeDefined();
    });
  });

  describe("when a favourite icon is pressed", () => {
    it("should call the onFavouritePress function", () => {
      const favouriteIcon = tree.getAllByTestId("FavouriteIcon");

      fireEvent.press(favouriteIcon[0]);
      expect(onFavouritePressMock).toHaveBeenCalledWith(launchesMock[0]);
    });
  });

  describe("when a card is pressed", () => {
    it("should call the onCardPress function", () => {
      const card = tree.getByTestId("launch-107");

      fireEvent.press(card);
      expect(onCardPressMock).toHaveBeenCalledWith(launchesMock[0]);
    });
  });
});
