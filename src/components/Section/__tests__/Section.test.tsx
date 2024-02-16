import { RenderAPI, render } from "@testing-library/react-native";
import { Section } from "../Section";

describe("Section", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(<Section title="Section" text="Section text" />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the title correctly", () => {
    const sectionTitle = tree.getByText("Section");

    expect(sectionTitle).toBeDefined();
  });

  it("should render the text correctly", () => {
    const sectionText = tree.getByText("Section text");

    expect(sectionText).toBeDefined();
  });
});
