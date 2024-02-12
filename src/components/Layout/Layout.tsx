import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";
import { styles } from "./styles";
import { background } from "../../design/tokens/colors";
import { StatusBar } from "expo-status-bar";
import { LayoutProps } from "./types";

export const Layout = ({ children, style }: LayoutProps) => (
  <View style={styles.container}>
    <LinearGradient
      colors={[background.dark, background.primary]}
      style={StyleSheet.flatten([styles.background, style])}
    >
      {children}
    </LinearGradient>
    <StatusBar style="light" />
  </View>
);
