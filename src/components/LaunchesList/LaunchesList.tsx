import { FlashList } from "@shopify/flash-list";
import { LaunchCard } from "../LaunchCard";
import { View, Text } from "react-native";
import { LaunchesListProps } from "./types";
import { LAUNCH_CARD_HEIGHT } from "../LaunchCard/styles";
import { styles } from "./styles";
import { useFavourites } from "../../hooks/useFavourites";

export const LaunchesList = ({
  launches,
  onCardPress,
  emptyListText,
}: LaunchesListProps) => {
  const { favouriteFlightNumbers, toggleFavourites } = useFavourites();

  return (
    <FlashList
      data={launches}
      renderItem={({ item }) => (
        <LaunchCard
          testID={`launch-${item.flight_number}`}
          name={item.mission_name}
          flightNumber={item.flight_number}
          date={item.launch_date_local}
          missionTag={item.links.mission_patch_small}
          launchImage={item.links.flickr_images[0]}
          onPress={() => onCardPress(item)}
          favourite={favouriteFlightNumbers.includes(item.flight_number)}
          onFavouritePress={() => toggleFavourites(item)}
        />
      )}
      extraData={favouriteFlightNumbers}
      ItemSeparatorComponent={() => (
        <View testID="itemSeparator" style={styles.separator} />
      )}
      estimatedItemSize={LAUNCH_CARD_HEIGHT}
      contentContainerStyle={styles.listContentContainerStyle}
      ListFooterComponent={() => (
        <View testID="listFooter" style={styles.footer} />
      )}
      ListEmptyComponent={() => (
        <View testID="listEmpty" style={styles.emptyListContainer}>
          <Text testID="emptyText" style={styles.emptyListText}>
            {emptyListText || "No launches found"}
          </Text>
        </View>
      )}
    />
  );
};
