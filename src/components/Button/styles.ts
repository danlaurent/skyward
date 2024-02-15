import { StyleSheet } from "react-native";
import { background, button, text } from "../../design/tokens/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: button.dark,
  },
  label: {
    color: text.secondary,
    textAlign: "center",
  },
});
