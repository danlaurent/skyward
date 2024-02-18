import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { background, text } from "../../src/design/tokens/colors";

const TabsLayout = () => (
  <Tabs
    screenOptions={{
      tabBarStyle: {
        position: "absolute",
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopWidth: 0,
        backgroundColor: background.dark,
      },
      headerStyle: {
        backgroundColor: background.dark,
        shadowColor: "transparent",
      },
      headerTitleStyle: {
        color: text.secondary,
      },
      headerTitleAlign: "center",
      tabBarActiveTintColor: text.secondary,
      tabBarInactiveTintColor: text.light,
    }}
  >
    <Tabs.Screen
      name="(launches)/index"
      options={{
        title: "Latest Launches",
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="rocket" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="favourites/index"
      options={{
        title: "Favourites",
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="star" size={size} color={color} />
        ),
      }}
    />
  </Tabs>
);

export default TabsLayout;
