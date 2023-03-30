import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import tw from "twrnc";
import ImgSlider from "../components/ImgSlider";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Body = () => {
  const navigation = useNavigation();

  console.disableYellowBox = true;
  const data2 = [
    {
      id: 1,
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
      label: "Luxury",
    },
    {
      id: 2,
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
      label: "Economy",
    },
    {
      id: 3,
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
      label: "Premium",
    },
    {
      id: 4,
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
      label: "SUV",
    },
    {
      id: 5,
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
      label: "Comfort",
    },
    {
      id: 6,
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
      label: "Sports",
    },
  ];
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        {/* navoption for ride and food start here------- */}
        <NavOptions />
        {/* navoption for ride and food ends here ------- */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <View>
            <Text style={tw`text-xl font-bold`}>Suggestions</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={tw`text-[16px] `}>Sell all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={data2}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={tw`p-2 flex justify-center bg-gray-200 m-2   w-20 h-20`}
                onPress={() => navigation.navigate(item.screen)}
              >
                <View>
                  <Image
                    style={{
                      width: 80,
                      height: 60,
                      resizeMode: "contain",
                    }}
                    source={{
                      uri: item.image,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  letterSpacing: 1,
                  color: "black",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Text>
            </View>
          )}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 35,
          }}
        >
          <View>
            <Text style={tw`text-xl font-bold`}>Aroud you</Text>
          </View>
        </View>
        <View>
          <Image
            source={{
              uri: "https://s.wsj.net/public/resources/images/BN-XS108_201803_E_20180301182540.gif",
            }}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "contain",
              marginTop: 10,
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <ImgSlider />
        </View>
      </View>
    </ScrollView>
  );
};

export default Body;

const styles = StyleSheet.create({});
