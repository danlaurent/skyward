import { Dimensions, StyleSheet } from "react-native";
import { text } from "../../src/design/tokens/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get("window").width,
    height: 240,
  },
  main: {
    padding: 32,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: text.primary,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 20,
    color: text.primary,
  },
  text: {
    color: text.primary,
  },
  missionTagContainer: {
    marginBottom: 24,
  },
  rocketAndTagContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  favouriteIcon: {
    marginBottom: 24,
  },
});
