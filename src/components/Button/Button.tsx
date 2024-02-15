import { Pressable, Text } from "react-native";
import { styles } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({ onPress, label, style }: ButtonProps) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.container,
      style,
      { opacity: pressed ? 0.7 : 1 },
    ]}
  >
    <Text style={styles.label}>{label}</Text>
  </Pressable>
);
