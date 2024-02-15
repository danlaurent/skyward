import { View, Text, ImageBackground, Pressable } from "react-native";
import { styles } from "./styles";
import { ListItemProps } from "./types";
import { Section } from "../Section";
import { text } from "../../design/tokens/colors";
import { MissionTag } from "../MissionTag/MissionTag";

export const LaunchCard = ({
  name,
  date,
  launchImage,
  missionTag,
  onPress,
}: ListItemProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <ImageBackground
        source={{
          uri:
            launchImage ||
            "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg",
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.row}>
          <Section title={name} text={date} titleColor={text.light} />
        </View>
        {missionTag && (
          <MissionTag
            tagImage={missionTag}
            style={styles.missionTagContainer}
          />
        )}
      </ImageBackground>
    </Pressable>
  );
};
