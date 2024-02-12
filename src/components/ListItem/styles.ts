import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 168,
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
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
    color: "white",
    fontWeight: "600",
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    color: "white",
  },
  favouriteIcon: {
    backgroundColor: "red",
    width: 24,
    height: 24,
  },
  missionTag: {
    width: 42,
    height: 42,
    alignSelf: "flex-end",
  },
  image: {
    flex: 1,
    width: "100%",
  },
});
