import { StyleSheet, Dimensions } from "react-native";
import { text } from "../../design/tokens/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 16,
  },
  listContentContainerStyle: {
    padding: 32,
  },
  footer: {
    height: 64,
  },
  emptyListContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListText: {
    fontSize: 20,
    color: text.secondary,
  },
});
