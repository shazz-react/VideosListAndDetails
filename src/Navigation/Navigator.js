import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import VideosListScreen from "../Screens/VideosListScreen";
import VideoDetailsScreen from "../Screens/VideoDetailsScreen";
import BookmarksScreen from "../Screens/BoomarksScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicon from "react-native-vector-icons/Octicons";
import { Text } from "react-native";
import {
  titleColor,
  primaryColor,
  secondaryColor,
  inactiveTintColor,
} from "../Constants/Colors";

const StackNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

const FeedStack = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerTintColor: titleColor,
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

const BookmarkStack = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerTintColor: titleColor,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <StackNavigator.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          title: "My Bookmarks",
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
            let iconColor;
            if (route.name === "My Feed") {
              iconName = "home";
              iconColor = focused ? primaryColor : inactiveTintColor;
            } else if (route.name === "Bookmarks") {
              iconName = "bookmark";
              iconColor = focused ? secondaryColor : inactiveTintColor;
            }
            return <Octicon name={iconName} size={size} color={iconColor} />;
          },
          tabBarLabel: ({ focused }) => {
            let labelText;
            let textColor;
            if (route.name === "My Feed") {
              labelText = "My Feed";
              textColor = focused ? primaryColor : inactiveTintColor;
            } else if (route.name === "Bookmarks") {
              labelText = "Bookmarks";
              textColor = focused ? secondaryColor : inactiveTintColor;
            }
            return (
              <Text style={{ color: textColor, fontSize: 10 }}>
                {labelText}
              </Text>
            );
          },
        })}
        tabBarOptions={{}}
      >
        <TabNavigator.Screen name="My Feed" component={FeedStack} />
        <TabNavigator.Screen name="Bookmarks" component={BookmarkStack} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
