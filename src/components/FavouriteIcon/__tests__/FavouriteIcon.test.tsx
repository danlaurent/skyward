import { RenderAPI, fireEvent, render } from "@testing-library/react-native";
import { FavouriteIcon } from "../FavouriteIcon";

const onPressMock = jest.fn();

const renderFavouriteIcon = (isFavourite?: boolean) =>
  render(
    <FavouriteIcon
      isFavourite={isFavourite}
      onPress={onPressMock}
      testID="favouriteIcon"
    />
  );

describe("FavouriteIcon", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = renderFavouriteIcon();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the empty star icon", () => {
    const favouriteIcon = tree.getByTestId("favouriteIcon");
    const iconName = favouriteIcon.props.children[0].props.name;

    expect(iconName).toEqual("star-border");
  });

  describe("when is a favourite", () => {
    it("renders the filled star icon", () => {
      const { getByTestId } = renderFavouriteIcon(true);
      const favouriteIcon = getByTestId("favouriteIcon");
      const iconName = favouriteIcon.props.children[0].props.name;

      expect(iconName).toEqual("star");
    });
  });

  describe("when the favourite icon is pressed", () => {
    it("calls the onPress function", () => {
      const { getByTestId } = tree;

      const favouriteIcon = getByTestId("favouriteIcon");
      fireEvent.press(favouriteIcon);

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });
  });
});
