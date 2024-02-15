import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { styles } from "./styles";
import { background, text } from "../../design/tokens/colors";
import { StatusBar } from "expo-status-bar";
import { LayoutProps } from "./types";
import { Button } from "../Button/Button";
import { MaterialIcons } from "@expo/vector-icons";

export const Layout = ({
  loading,
  error,
  children,
  style,
  onRetryPress,
}: LayoutProps) => {
  const getContent = () => {
    if (loading) {
      return (
        <View style={styles.pendingOrErrorContainer}>
          <ActivityIndicator
            size="large"
            color={text.secondary}
            style={styles.loadingIndicator}
          />
          <Text style={styles.text}>Loading</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.pendingOrErrorContainer}>
          <MaterialIcons
            name="warning"
            size={42}
            color={text.secondary}
            style={styles.errorIcon}
          />
          <Text style={StyleSheet.flatten([styles.text, styles.errorText])}>
            Something went wrong
          </Text>
          <Button label="Retry" onPress={onRetryPress} />
        </View>
      );
    }

    return children;
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[background.dark, background.primary]}
        style={StyleSheet.flatten([styles.container, style])}
      >
        {getContent()}
      </LinearGradient>
      <StatusBar style="light" />
    </View>
  );
};
