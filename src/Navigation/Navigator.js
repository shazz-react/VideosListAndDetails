import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import VideosListScreen from "../Screens/VideosListScreen";
import VideoDetailsScreen from "../Screens/VideoDetailsScreen";
import BookmarksScreen from "../Screens/BoomarksScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicon from "react-native-vector-icons/Octicons";

const StackNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

const FeedStack = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerTintColor: "#53354a",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <StackNavigator.Screen
        name="My Feed"
        component={VideosListScreen}
        options={{
          title: "My Feed",
        }}
      />
      <StackNavigator.Screen
        name="Details"
        component={VideoDetailsScreen}
        options={({ route }) => ({
          title: route.params.item.item.title,
        })}
      />
    </StackNavigator.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "My Feed") {
              iconName = "home";
            } else if (route.name === "Bookmarks") {
              iconName = "bookmark";
            }
            return <Octicon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#ff577f",
          inactiveTintColor: "gray",
        }}
      >
        <TabNavigator.Screen name="My Feed" component={FeedStack} />
        <TabNavigator.Screen name="Bookmarks" component={BookmarksScreen} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
