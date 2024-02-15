import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { MissionTagProps } from "./types";

export const MissionTag = ({ tagImage, style }: MissionTagProps) => (
  <View style={StyleSheet.flatten([styles.missionTagContainer, style])}>
    <Image style={styles.missionTag} source={tagImage} contentFit="contain" />
  </View>
);
