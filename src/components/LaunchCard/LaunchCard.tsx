import { View, ImageBackground, Pressable } from "react-native";
import { styles } from "./styles";
import { LaunchCardProps } from "./types";
import { Section } from "../Section";
import { text } from "../../design/tokens/colors";
import { MissionTag } from "../MissionTag/MissionTag";
import moment from "moment";
import { FavouriteIcon } from "../FavouriteIcon";

export const LaunchCard = ({
  name,
  flightNumber,
  date,
  launchImage,
  missionTag,
  onPress,
  testID,
  missionTagImageTestID,
  imageBackgroundTestID,
  favourite,
  onFavouritePress,
}: LaunchCardProps) => {
  return (
    <Pressable testID={testID} onPress={onPress} style={styles.container}>
      <ImageBackground
        testID={imageBackgroundTestID}
        source={{
          uri:
            launchImage ||
            "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg",
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.row}>
          <Section
            title={name}
            text={moment(date).format("LLL")}
            titleColor={text.light}
            style={styles.section}
          />
          <FavouriteIcon
            isFavourite={favourite}
            onPress={() => onFavouritePress(flightNumber)}
          />
        </View>
        {missionTag && (
          <MissionTag
            tagImage={missionTag}
            style={styles.missionTagContainer}
            imageTestID={missionTagImageTestID}
          />
        )}
      </ImageBackground>
    </Pressable>
  );
};
