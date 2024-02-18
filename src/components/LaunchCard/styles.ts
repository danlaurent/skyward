import { StyleSheet } from "react-native";
import { background, text } from "../../design/tokens/colors";

export const LAUNCH_CARD_HEIGHT = 168;

export const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: LAUNCH_CARD_HEIGHT,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: background.primary,
  },
  backgroundImage: {
    justifyContent: "space-between",
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    color: text.light,
    fontWeight: "600",
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    color: text.light,
  },
  missionTagContainer: {
    alignSelf: "flex-end",
  },
  section: {
    marginBottom: 0,
  },
});
