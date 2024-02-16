import { Button } from "../Button";
import { RenderAPI, render, fireEvent } from "@testing-library/react-native";

const onPress = jest.fn();

describe("Button", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(<Button label="Button" onPress={onPress} />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the label correctly", () => {
    const buttonLabel = tree.getByText("Button");

    expect(buttonLabel).toBeDefined();
  });

  describe("when pressed", () => {
    beforeEach(() => {
      tree = render(
        <Button
          testID="MyButton"
          label="Button"
          onPress={onPress}
          testOnlyPressed
        />
      );
    });

    it("should call the onPress function", () => {
      const button = tree.getByText("Button");
      fireEvent.press(button);

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it("should decrease the opacity", () => {
      const button = tree.getByTestId("MyButton");
      fireEvent.press(button);

      expect(button.props.style[2].opacity).toBe(0.7);
    });
  });
});
