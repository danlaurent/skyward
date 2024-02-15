import { View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { LaunchCard } from "../../../src/components/LaunchCard";
import { FlashList } from "@shopify/flash-list";
import { LaunchesProps } from "./types";
import { LAUNCH_CARD_HEIGHT } from "../../../src/components/LaunchCard/styles";

export const Launches = ({ launches }: LaunchesProps) => (
  <View style={styles.container}>
    <FlashList
      data={launches}
      renderItem={({ item }) => (
        <LaunchCard
          name={item.mission_name}
          date={item.launch_date_local}
          missionTag={item.links.mission_patch_small}
          launchImage={item.links.flickr_images[0]}
          onPress={() => router.push(`launchDetails/${item.flight_number}`)}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      estimatedItemSize={LAUNCH_CARD_HEIGHT}
      contentContainerStyle={styles.listContentContainerStyle}
      ListFooterComponent={() => <View style={styles.footer} />}
    />
  </View>
);
