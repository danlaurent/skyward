import { Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./styles";
import { IconButtonProps } from "./types";
import { text } from "../../design/tokens/colors";

export const BackButton = ({ onPress, style }: IconButtonProps) => (
  <Pressable
    onPress={onPress}
    style={StyleSheet.flatten([styles.container, style])}
  >
    <MaterialIcons name="chevron-left" size={24} color={text.secondary} />
  </Pressable>
);
