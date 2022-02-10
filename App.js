import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/Pages/Home/HomeScreen";
import Intercambialidade from "./src/Pages/Intercambialidade/Intercambialidade";
import TermsScreen from "./src/Pages/Terms/TermsScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              return (
                <FontAwesome5
                  name="home"
                  size={24}
                  color="rgba(22, 22, 63, 0.9)"
                />
              );
            } else if (route.name === "Intercambialidade?") {
              iconName = focused ? "ios-list-box" : "ios-list";
              return (
                <MaterialIcons
                  name="policy"
                  size={24}
                  color="rgba(22, 22, 63, 0.9)"
                />
              );
            } else if (route.name === "Políticas de privacidade") {
              iconName = focused ? "ios-list-box" : "ios-list";
              return (
                <MaterialIcons
                  name="policy"
                  size={24}
                  color="rgba(22, 22, 63, 0.9)"
                />
              );
            }

          },
          tabBarActiveTintColor: "#2ABEC6",
          tabBarInactiveTintColor: "rgba(22, 22, 63, 0.9)",
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Intercambialidade?" component={Intercambialidade} />
        <Tab.Screen name="Políticas de privacidade" component={TermsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
