import { RenderAPI, render, fireEvent } from "@testing-library/react-native";
import { BackButton } from "../BackButton";

const onPress = jest.fn();

describe("BackButton", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(<BackButton onPress={onPress} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the back arrow correctly", () => {
    const backButtonIcon = tree.getByTestId("backButtonChevronLeft");

    expect(backButtonIcon).toBeDefined();
  });

  it("should call the onPress function when pressed", () => {
    const backButton = tree.getByTestId("backButton");
    fireEvent.press(backButton);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
