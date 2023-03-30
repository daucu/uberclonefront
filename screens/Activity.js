import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Activity = () => {
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
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Activity
        </Text>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#000",
              marginTop: 20,
            }}
          >
            Upcoming
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            borderWidth: 1,
            borderColor: "#9E9990",
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                color: "black",
              }}
            >
              You have no upcoming trips
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png",
              }}
              style={{
                width: 50,
                height: 50,
                resizeMode: "cover",
              }}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#000",
              marginTop: 40,
            }}
          >
            Past ride's
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              marginTop: 10,
            }}
          >
            <View>
              <Text>Toronto</Text>
            </View>
            <View>
              <FontAwesome name="long-arrow-right" size={35} color="black" />
            </View>
            <View>
              <Text>Brampton</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderWidth: 1,
              borderColor: "#9E9990",
              borderRadius: 5,
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnUjhc20jr1lEYXGPCYQUz_Qtizw0YVgZmQ&usqp=CAU",
              }}
              style={{
                width: "100%",
                height: 190,
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                  color: "#000",
                }}
              >
                Brampton (Canada)
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                  color: "#000",
                }}
              >
                $14.00
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "300",
                }}
              >
                12/12/2020
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontWeight: "300",
                }}
              >
                15 min
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              marginTop: 30,
            }}
          >
            <View>
              <Text>Surrey</Text>
            </View>
            <View>
              <FontAwesome name="long-arrow-right" size={35} color="black" />
            </View>
            <View>
              <Text>Vancouver</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              borderWidth: 1,
              borderColor: "#9E9990",
              borderRadius: 5,
            }}
          >
            <Image
              source={{
                uri: "https://www.uberpeople.net/attachments/954f44de-414c-492f-9d92-36ad8334f40e-jpeg.404840/",
              }}
              style={{
                width: "100%",
                height: 190,
                resizeMode: "cover",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                  color: "#000",
                }}
              >
                Vancouver (Canada)
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "300",
                  color: "#000",
                }}
              >
                $20.00
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "300",
                }}
              >
                18/12/2022
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontWeight: "300",
                }}
              >
                30 min
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Activity;

const styles = StyleSheet.create({});
