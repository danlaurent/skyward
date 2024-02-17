import { StyleProp, ViewStyle } from "react-native";

export interface SectionProps {
  title: string;
  text: string;
  titleColor?: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>;
}
