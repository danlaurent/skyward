import { RenderAPI, render } from "@testing-library/react-native";
import { LaunchDetails } from "../LaunchDetails";
import { launchesMock } from "../../../src/__mocks__/launches";

const launchMock = launchesMock[0];

describe("LaunchDetails", () => {
  let tree: RenderAPI;

  beforeEach(() => {
    tree = render(<LaunchDetails launch={launchMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the launch details", () => {
    const { getByText, getByTestId } = tree;

    const missionName = getByText(launchMock.mission_name);
    const missionDate = getByText(launchMock.launch_date_local);
    const launchSite = getByText(launchMock.launch_site.site_name_long);
    const rocket = getByText(launchMock.rocket.rocket_name);

    expect(missionName).toBeDefined();
    expect(missionDate).toBeDefined();
    expect(launchSite).toBeDefined();
    expect(rocket).toBeDefined();
  });
});
