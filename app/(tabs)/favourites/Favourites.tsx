import { View, Text } from "react-native";
import { FavouritesProps } from "./types";
import { styles } from "./styles";
import { LaunchesList } from "../../../src/components/LaunchesList";
import { router } from "expo-router";

export const Favourites = ({ favourites }: FavouritesProps) => (
  <View style={styles.container}>
    <LaunchesList
      launches={favourites}
      onCardPress={(launch) =>
        router.push(`launchDetails/${launch.flight_number}`)
      }
      emptyListText="You have no favourites yet"
    />
  </View>
);
