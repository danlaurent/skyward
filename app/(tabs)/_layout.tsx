import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { BlurView } from "expo-blur";
import { background } from "../../src/design/tokens/colors";

const TabsLayout = () => (
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: "absolute",
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopWidth: 0,
        backgroundColor: background.dark,
      },
      tabBarBackground: () => <BlurView tint="dark" intensity={60} />,
    }}
  >
    <Tabs.Screen
      name="(launches)/index"
      options={{
        title: "Launches",
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="rocket" size={size} color={color} />
        ),
      }}
    />
  </Tabs>
);

export default TabsLayout;
