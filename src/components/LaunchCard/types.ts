export interface ListItemProps {
  name: string;
  date: string;
  missionTag?: string;
  launchImage?: string;
  onPress?: () => void;
}