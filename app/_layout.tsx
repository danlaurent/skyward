import { Stack, router } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../src/state/store";
import { BackButton } from "../src/components/BackButton/BackButton";

const RootLayout = () => (
  <Provider store={store}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="launchDetails/[flightNumber]"
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerLeft: () => <BackButton onPress={() => router.back()} />,
        }}
      />
    </Stack>
  </Provider>
);

export default RootLayout;
