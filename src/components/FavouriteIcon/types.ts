import { StyleProp, ViewStyle } from "react-native";

export interface FavouriteIconProps {
  isFavourite?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}
