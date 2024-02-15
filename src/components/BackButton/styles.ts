import { StyleSheet } from "react-native";
import { background } from "../../design/tokens/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: background.dark,
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});
