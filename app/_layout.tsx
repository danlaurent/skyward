import { Stack } from "expo-router";

const RootLayout = () => (
  <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen
      name="launchDetails/index"
      options={{
        headerTitle: "",
        headerBackTitleVisible: false,
        headerTransparent: true,
      }}
    />
  </Stack>
);

export default RootLayout;
