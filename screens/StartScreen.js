import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
const StartScreen = () => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View>
        <Image
          source={require("../assets/f.webp")}
          style={{
            width: 300,
            height: 300,
            margin: "auto",
            alignSelf: "center",
            resizeMode: "contain",
          }}
        />
      </View>
      <View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "black",
            padding: 10,
            borderRadius: 5,
            width: 200,
            marginTop: 25,
            fontcolor: "white",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 25,
              display: "flex",
              alignItems: "center",
            }}
          >
            Get a ride
          </Text>
        </View>
        <View
          style={{
            marginTop: 25,
            display: "flex",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                margin: 10,
              }}
            >
              <TouchableOpacity onPress={() => navigate.navigate("Signup")}>
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  Signup
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                margin: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                /
              </Text>
            </View>
            <View
              style={{
                margin: 10,
              }}
            >
              <TouchableOpacity onPress={() => navigate.navigate("Login")}>
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
