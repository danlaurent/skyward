import { View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { LaunchesProps } from "./types";
import { LaunchesList } from "../../components/LaunchesList";

export const Launches = ({ launches }: LaunchesProps) => (
  <View style={styles.container}>
    <LaunchesList
      launches={launches}
      onCardPress={(launch) =>
        router.push(`launchDetails/${launch.flight_number}`)
      }
    />
  </View>
);
