import { StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  testOnlyPressed?: boolean;
  testID?: string;
}
