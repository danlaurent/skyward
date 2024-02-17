import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { MissionTagProps } from "./types";

export const MissionTag = ({
  tagImage,
  style,
  imageTestID,
}: MissionTagProps) => (
  <View style={StyleSheet.flatten([styles.missionTagContainer, style])}>
    <Image
      testID={imageTestID}
      style={styles.missionTag}
      source={tagImage}
      contentFit="contain"
    />
  </View>
);
