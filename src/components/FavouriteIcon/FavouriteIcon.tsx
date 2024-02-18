import { Pressable, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FavouriteIconProps } from "./types";
import { text } from "../../design/tokens/colors";
import { styles } from "./styles";

export const FavouriteIcon = ({
  testID = "FavouriteIcon",
  isFavourite,
  onPress,
  style,
}: FavouriteIconProps) => (
  <Pressable
    onPress={onPress}
    style={StyleSheet.flatten([styles.container, style])}
    testID={testID}
  >
    <MaterialIcons
      testID={isFavourite ? "star" : "star-border"}
      name={isFavourite ? "star" : "star-border"}
      size={32}
      color={text.light}
    />
  </Pressable>
);
