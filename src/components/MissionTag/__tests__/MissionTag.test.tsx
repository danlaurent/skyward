import { RenderAPI, render } from "@testing-library/react-native";
import { MissionTag } from "../MissionTag";

const tagImage =
  "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg";

describe("MissionTag", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(<MissionTag tagImage={tagImage} imageTestID="MyTag" />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    const missionTagImage = tree.getByTestId("MyTag");

    expect(missionTagImage).toBeDefined();
    expect(missionTagImage.props.source).toEqual([{ uri: tagImage }]);
  });
});
