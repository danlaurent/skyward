import { Text, View } from "react-native";
import { Layout } from "../../src/components/Layout";
import { styles } from "./styles";

export const LaunchDetails = () => (
  <Layout>
    <View style={styles.container}>
      <Text style={styles.text}>Details</Text>
    </View>
  </Layout>
);
