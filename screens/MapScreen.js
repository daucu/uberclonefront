import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const MapScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <Image
        source={{
          uri: "https://s.wsj.net/public/resources/images/BN-XS108_201803_E_20180301182540.gif",
        }}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "cover",
        }}
      />
      {/* <View
        style={{
          padding: 10,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Search Location
        </Text>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="From"
            style={{
              backgroundColor: "white",
              // shadow
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 1,
            }}
          />
          <View>
            <Entypo
              name="arrow-long-down"
              size={30}
              color="black"
              style={{
                margin: 20,
                textAlign: "center",
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="Destination"
              style={{
                backgroundColor: "white",
                // shadow
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 1,
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                padding: 10,
                borderRadius: 5,
                marginTop: 20,
                width: 200,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          fontWeight: "400",
          letterSpacing: 1,
          textAlign: "center",
        }}
      >
        Search Location
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 20,
            marginTop: 20,
          }}
        >
          <View>
            <Octicons
              name="dot-fill"
              color="black"
              style={{
                textAlign: "center",
                fontSize: 20,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: "300",
                color: "black",
                fontSize: 70,
                textAlign: "center",
              }}
            >
              |
            </Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="square-medium"
              color="black"
              style={{
                textAlign: "center",
                fontSize: 30,
                marginBottom: 10,
              }}
            />
          </View>
        </View>
        <View>
          <View>
            <TextInput
              placeholder="From"
              style={{
                width: 300,
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="Destination"
              style={{
                width: 300,
                marginTop: 50,
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          padding: 20,
          textAlign: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 5,
            width: 200,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              letterSpacing: 2,
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
