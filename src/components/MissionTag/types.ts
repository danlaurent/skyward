import { StyleProp, ViewStyle } from "react-native";
import { ImageProps } from "expo-image";

export interface MissionTagProps {
  tagImage: ImageProps["source"];
  style?: StyleProp<ViewStyle>;
}
