import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Profile = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Profile
        </Text>
        <View
          style={{
            display: "flex",

            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 22,
                color: "black",
              }}
            >
              UserName
            </Text>
            <View
              style={tw`flex-row items-center  justify-evenly mt-2 bg-gray-200 p-2 rounded-md   `}
            >
              <View>
                {/* star icon */}
                <Icon name="star" type="antdesign" size={17} />
              </View>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                5.0
              </Text>
            </View>
          </View>
          <View
            style={tw`bg-gray-200 p-2 rounded-lg w-[80px] h-[80px] justify-center items-center rounded-full`}
          >
            {/* <Icon name="user" type="antdesign" size={20} /> */}
            {/* user image */}
            <Image
              source={{
                uri: "https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg",
              }}
              style={{ width: 65, height: 65, borderRadius: 65 }}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            marginTop: 60,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View style={tw`bg-gray-200 p-2 rounded-lg w-[80px]`}>
            <View>
              <Icon
                name="help-box"
                type="material-community"
                size={30}
                color="black"
              />
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              Help
            </Text>
          </View>
          <View style={tw`bg-gray-200 p-2 rounded-lg w-[80px]`}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* entypo icon */}
              <Entypo name="wallet" size={30} color="black" />
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              Wallet
            </Text>
          </View>
          <View style={tw`bg-gray-200 p-2 rounded-lg w-[80px]`}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="time-sharp" size={30} color="black" />
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "black",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              Trips
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              display: "flex",
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                width: 50,
              }}
            >
              <AntDesign name="message1" size={20} color="black" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                }}
              >
                Messages
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                width: 50,
              }}
            >
              <FontAwesome5 name="bus-alt" size={20} color="black" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                }}
              >
                Shuttle package
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                width: 50,
              }}
            >
              <MaterialCommunityIcons
                name="bag-checked"
                size={20}
                color="black"
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                }}
              >
                Business hub
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                width: 50,
              }}
            >
              <AntDesign name="gift" size={20} color="black" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                }}
              >
                Send a gift
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                width: 50,
              }}
            >
              <FontAwesome5 name="route" size={20} color="black" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                }}
              >
                Shuttle Routes
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                width: 50,
              }}
            >
              <AntDesign name="setting" size={25} color="black" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                }}
              >
                Settings
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                width: 50,
              }}
            >
              <MaterialCommunityIcons
                name="account-group"
                size={20}
                color="black"
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                }}
              >
                Refer and Earn
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
