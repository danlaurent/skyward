import { RenderAPI, fireEvent, render } from "@testing-library/react-native";
import { Layout } from "../Layout";
import { Text } from "react-native";
import { LayoutProps } from "../types";

const onRetryPress = jest.fn();
const errorMock: LayoutProps["error"] = {
  data: "Not Found",
  error: "SyntaxError: JSON Parse error: Unexpected character: N",
  originalStatus: 404,
  status: "PARSING_ERROR",
};

describe("Layout", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(
      <Layout loading={false} error={undefined}>
        <Text>MyContent</Text>
      </Layout>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the content correctly", () => {
    const sectionTitle = tree.getByText("MyContent");

    expect(sectionTitle).toBeDefined();
  });

  describe("when loading", () => {
    beforeEach(() => {
      tree = render(
        <Layout loading error={undefined}>
          <Text>MyContent</Text>
        </Layout>
      );
    });

    it("should render the loading spinner", () => {
      const loadingIndicator = tree.getByTestId("loadingIndicator");

      expect(loadingIndicator).toBeDefined();
    });
  });

  describe("when error", () => {
    beforeEach(() => {
      tree = render(
        <Layout loading={false} error={errorMock} onRetryPress={onRetryPress}>
          <Text>MyContent</Text>
        </Layout>
      );
    });

    it("should render the error message", () => {
      const errorText = tree.getByText("Something went wrong");

      expect(errorText).toBeDefined();
    });

    it("should call the onRetryPress function when retry button is pressed", () => {
      const retryButton = tree.getByTestId("retryButton");
      fireEvent.press(retryButton);

      expect(onRetryPress).toHaveBeenCalledTimes(1);
    });
  });
});
