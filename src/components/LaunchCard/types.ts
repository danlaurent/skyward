export interface ListItemProps {
  name: string;
  date: string;
  missionTag?: string;
  launchImage?: string;
  onPress?: () => void;
  testID?: string;
  missionTagImageTestID?: string;
  imageBackgroundTestID?: string;
}
