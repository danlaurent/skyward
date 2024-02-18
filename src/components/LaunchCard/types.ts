export interface LaunchCardProps {
  name: string;
  flightNumber: number;
  date: string;
  missionTag?: string;
  launchImage?: string;
  onPress?: () => void;
  testID?: string;
  missionTagImageTestID?: string;
  imageBackgroundTestID?: string;
  favourite?: boolean;
  onFavouritePress: (flightNumber: number) => void;
}
