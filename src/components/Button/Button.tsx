import { Pressable, Text } from "react-native";
import { styles } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({
  onPress,
  label,
  style,
  testOnlyPressed,
  testID,
}: ButtonProps) => (
  <Pressable
    testID={testID}
    onPress={onPress}
    style={({ pressed }) => [
      styles.container,
      style,
      { opacity: pressed ? 0.7 : 1 },
    ]}
    testOnly_pressed={testOnlyPressed}
  >
    <Text style={styles.label}>{label}</Text>
  </Pressable>
);
