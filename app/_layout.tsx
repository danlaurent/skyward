import { Stack, router } from "expo-router";
import { Provider } from "react-redux";
import { persistor, store } from "../src/state/store";
import { BackButton } from "../src/components/BackButton/BackButton";
import { PersistGate } from "redux-persist/integration/react";

const RootLayout = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
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
    </PersistGate>
  </Provider>
);

export default RootLayout;
