import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Image } from "expo-image";
import { Section } from "../../components/Section";
import { LaunchDetailsProps } from "./types";
import { MissionTag } from "../../components/MissionTag";
import moment from "moment";
import { FavouriteIcon } from "../../components/FavouriteIcon";
import { useFavourites } from "../../hooks/useFavourites";

export const LaunchDetails = ({ launch }: LaunchDetailsProps) => {
  const { favouriteFlightNumbers, toggleFavourites } = useFavourites();
  return (
    <View style={styles.container} testID="launchDetailsContainer">
      <Image
        style={styles.image}
        source={{ uri: launch.links.flickr_images[0] }}
        placeholder={{
          uri: "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg",
        }}
        contentFit="cover"
        placeholderContentFit="cover"
        transition={300}
      />
      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.nameContainer}>
          <Section
            title={launch.mission_name}
            text={moment(launch.launch_date_local).format("LLL")}
          />

          <FavouriteIcon
            isFavourite={favouriteFlightNumbers.includes(launch.flight_number)}
            style={styles.favouriteIcon}
            onPress={() => toggleFavourites(launch)}
          />
        </View>

        <Section title="Launch site" text={launch.launch_site.site_name_long} />
        <View style={styles.rocketAndTagContainer}>
          <Section title="Rocket" text={launch.rocket.rocket_name} />
          <MissionTag
            tagImage={launch.links.mission_patch_small}
            style={styles.missionTagContainer}
          />
        </View>

        {launch.details && <Section title="Details" text={launch.details} />}
      </ScrollView>
    </View>
  );
};
