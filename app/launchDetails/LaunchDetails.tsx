import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Image } from "expo-image";
import { Section } from "../../src/components/Section";
import { LaunchDetailsProps } from "./types";
import { MissionTag } from "../../src/components/MissionTag";

export const LaunchDetails = ({ launch }: LaunchDetailsProps) => (
  <View style={styles.container}>
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
        <Section title={launch.mission_name} text={launch.launch_date_local} />
        <MissionTag
          tagImage={launch.links.mission_patch_small}
          style={styles.missionTagContainer}
        />
      </View>
      <Section title="Launch site" text={launch.launch_site.site_name_long} />
      <Section title="Rocket" text={launch.rocket.rocket_name} />
      {launch.details && <Section title="Details" text={launch.details} />}
    </ScrollView>
  </View>
);
