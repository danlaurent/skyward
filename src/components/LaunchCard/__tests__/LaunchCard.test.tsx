import { RenderAPI, render, waitFor } from "@testing-library/react-native";
import { LaunchCard } from "../LaunchCard";

describe("LaunchCard", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(
      <LaunchCard
        name="Launch Name"
        date="2021-06-03T17:00:00Z"
        launchImage="https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg"
        missionTag="https://images2.imgbox.com/9a/96/nLppz9HW_o.png"
        onPress={jest.fn()}
        missionTagImageTestID="MyTag"
        imageBackgroundTestID="MyBackground"
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render name and date correctly", () => {
    const launchName = tree.getByText("Launch Name");
    const launchDate = tree.getByText("June 3, 2021 7:00 PM");

    expect(launchName).toBeDefined();
    expect(launchDate).toBeDefined();
  });

  it("should render the background image correctly", async () => {
    const backgroundImage = tree.getByTestId("MyBackground");

    await waitFor(() => {
      expect(backgroundImage).toBeDefined();
    });

    expect(backgroundImage.props.source).toEqual({
      uri: "https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg",
    });
  });

  it("should render the mission tag image correctly", async () => {
    const missionTag = tree.getByTestId("MyTag");

    await waitFor(() => {
      expect(missionTag).toBeDefined();
    });

    expect(missionTag).toBeDefined();
    expect(missionTag.props.source).toEqual([
      {
        uri: "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
      },
    ]);
  });

  describe("when not provided with a launch image", () => {
    beforeEach(() => {
      tree = render(
        <LaunchCard
          name="Launch Name"
          date="2021-06-03T17:00:00Z"
          missionTag="https://images2.imgbox.com/9a/96/nLppz9HW_o.png"
          onPress={jest.fn()}
          missionTagImageTestID="MyTag"
          imageBackgroundTestID="MyBackground"
        />
      );
    });

    it("should render the default launch image", async () => {
      const backgroundImage = tree.getByTestId("MyBackground");

      await waitFor(() => {
        expect(backgroundImage).toBeDefined();
      });

      expect(backgroundImage.props.source).toEqual({
        uri: "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg",
      });
    });
  });
});
