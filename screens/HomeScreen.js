import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
import StartScreen from "./StartScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../constant/API";
import { useNavigation } from "@react-navigation/native";
// import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  const navigate = useNavigation();

  useEffect(() => {
    async function getinfo() {
      console.log(await AsyncStorage.getItem("token"));
      axios
        .get(`${API}/login/check_have_token`, {
          headers: {
            token: await AsyncStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data) {
            navigate.navigate("MainScreen");
          }
        })
        .catch((err) => {
          console.log(false);
        });
    }
    getinfo();
  }, []);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <StartScreen />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
