import { Pressable, Text, View } from "react-native";
import { Layout } from "../../../src/components/Layout";
import { styles } from "./styles";
import { router } from "expo-router";

export const Launches = () => (
  <Layout>
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/launchDetails")}>
        <Text style={styles.text}>Launches</Text>
      </Pressable>
    </View>
  </Layout>
);
