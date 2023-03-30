import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

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
            Past
          </Text>
        </View>
        <View>
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
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnUjhc20jr1lEYXGPCYQUz_Qtizw0YVgZmQ&usqp=CAU",
              }}
              style={{
                width: "100%",
                height: 300,
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
                  fontSize: 20,
                  fontWeight: "500",
                  color: "#000",
                }}
              >
                Brampton (Canada)
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  color: "#000",
                }}
              >
                $14.00
              </Text>
            </View>
            <View style={{}}>
              <Text>12/12/2020</Text>
              <Text
                style={{
                  textAlign: "right",
                }}
              >
                15 min
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
