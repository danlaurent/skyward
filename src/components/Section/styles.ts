import { StyleSheet } from "react-native";
import { text } from "../../design/tokens/colors";

export const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "bold",
    color: text.secondary,
  },
  text: {
    fontSize: 16,
    color: text.light,
  },
});
