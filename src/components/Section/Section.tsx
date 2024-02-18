import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";
import { SectionProps } from "./types";
import { text } from "../../design/tokens/colors";

const defaultTitleColor = text.secondary;
const defaultTextColor = text.light;

export const Section = ({
  title,
  text,
  titleColor = defaultTitleColor,
  textColor = defaultTextColor,
  style,
}: SectionProps) => (
  <View style={StyleSheet.flatten([styles.section, style])}>
    <Text style={StyleSheet.flatten([styles.title, { color: titleColor }])}>
      {title}
    </Text>
    <Text style={StyleSheet.flatten([styles.text, { color: textColor }])}>
      {text}
    </Text>
  </View>
);
