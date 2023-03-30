import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../screens/Profile";
import MapScreen from "../screens/MapScreen";
import Body from "../screens/Body";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Activity from "../screens/Activity";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Services from "../screens/Services";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const BottomTabNav = () => {
  // const Tab = createMaterialBottomTabNavigator();
  const Tab = createBottomTabNavigator();
  // how to add icon in bottom tab navigator
  // https://reactnavigation.org/docs/material-bottom-tab-navigator/

  return (
    <Tab.Navigator
      initialRouteName="Body"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#9e9e9e",
        tabBarStyle: {
          backgroundColor: "white",
          height: 70,
          bottom: 0,
          margin: 0,
          paddingBottom: 3,
          paddingTop: 5,
        },

        tabBarAllowFontScaling: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 5,
        },
      }}
      // barStyle={{
      //   borderTopColor: "gray",
      //   borderTopWidth: 0.3,
      //   backgroundColor: "white",
      // }}
      // activeColor="black"
      // inactiveColor="gray"
      // shifting={true}
      // sceneAnimationEnabled={true}
      // sceneAnimationType="opacity"
    >
      <Tab.Screen
        name="Body"
        component={Body}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          headerShown: false,
          tabBarLabel: "Services",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="apple-keyboard-command"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ActiviytScreen"
        component={Activity}
        options={{
          headerShown: false,
          tabBarLabel: "Activiyt",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
