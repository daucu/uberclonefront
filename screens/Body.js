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
const Body = () => {
  console.disableYellowBox = true;

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
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <TouchableOpacity>
                <View
                  style={tw`bg-gray-200 m-3 p-2 rounded-lg w-[70px] h-[70px] flex items-center justify-center`}
                >
                  <Image
                    source={{
                      uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png",
                    }}
                    style={{
                      width: 80,
                      height: 80,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "black",
                    textAlign: "center",
                    letterSpacing: 1,
                  }}
                >
                  Rentals
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View
                  style={tw`bg-gray-200 m-3 p-2 rounded-lg w-[70px] h-[70px] flex items-center justify-center`}
                >
                  <Image
                    source={{
                      uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png",
                    }}
                    style={{
                      width: 80,
                      height: 80,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "black",
                    textAlign: "center",
                    letterSpacing: 1,
                  }}
                >
                  Shuttle
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View
                  style={tw`bg-gray-200 m-3 p-2 rounded-lg w-[70px] h-[70px] flex items-center justify-center`}
                >
                  <Image
                    source={{
                      uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png",
                    }}
                    style={{
                      width: 80,
                      height: 80,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "black",
                    textAlign: "center",
                    letterSpacing: 1,
                  }}
                >
                  Reserve
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View
                  style={tw`bg-gray-200 m-3 p-2 rounded-lg w-[70px] h-[70px] flex items-center justify-center`}
                >
                  <Image
                    source={{
                      uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png",
                    }}
                    style={{
                      width: 80,
                      height: 80,
                      resizeMode: "contain",
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: "black",
                    textAlign: "center",
                    letterSpacing: 1,
                  }}
                >
                  Packages
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
