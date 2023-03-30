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
const BottomTabNav = () => {
  const Tab = createMaterialBottomTabNavigator();

  // how to add icon in bottom tab navigator
  // https://reactnavigation.org/docs/material-bottom-tab-navigator/

  return (
    <Tab.Navigator
      initialRouteName="Body"
      barStyle={{
        borderTopColor: "gray",
        borderTopWidth: 0.5,
        backgroundColor: "white",
      }}
      activeColor="black"
      inactiveColor="gray"
      shifting={true}
      sceneAnimationEnabled={true}
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
    // <View>
    //   <Text>BottomTabNav</Text>
    // </View>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
