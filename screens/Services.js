import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import Carousel from "react-native-snap-carousel-expo-46-compatible/src/carousel/Carousel";

const Services = () => {
  const data = [
    {
      id: 1,
      image:
        "https://www.ridester.com/wp-content/uploads/2018/10/does_uber_charge_per_person.webp",
    },
    {
      id: 2,
      image:
        "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2021/06/uber-connect-blog-header-01.png",
    },
    {
      id: 3,
      image:
        "https://www.ridester.com/wp-content/uploads/2021/08/uber_eats_tipping_3.webp",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4Oq9SBV6CyWYcFyAIf-CSHlMCM-fFZd7EQ&usqp=CAU",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <>
        <View>
          <Image
            source={{ uri: item.image }}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "cover",
              borderRadius: 10,
              margin: 10,
            }}
          />
        </View>
      </>
    );
  };

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
          Services
        </Text>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginTop: 10,
              fontWeight: "500",
            }}
          >
            Go anywhere and get anything
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            alignItems: "center",
            padding: 10,
          }}
        >
          <View style={tw`bg-gray-200 p-4  max-w-[100px] rounded-[15px]`}>
            <Image
              source={{
                uri: "https://www.elluminatiinc.com/wp-content/uploads/2020/06/ubrapsrc/ubrapsrc4.png",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                resizeMode: "cover",
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 10,
                marginTop: 5,
                textAlign: "center",
              }}
            >
              Expert Driver
            </Text>
          </View>
          <View style={tw`bg-gray-200  max-w-[100px]  p-4  rounded-[15px]`}>
            <Image
              source={{
                uri: "https://www.v3cube.com/images/uber-taxi-clone-latest/taxi-app_.png",
              }}
              style={{
                width: 70,
                height: 40,
                borderRadius: 10,
                resizeMode: "cover",
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 10,
                marginTop: 5,
                textAlign: "center",
              }}
            >
              Locations
            </Text>
          </View>
          <View style={tw`bg-gray-200 max-w-[100px] p-4  rounded-[15px]`}>
            <Image
              source={{
                uri: "https://www.uberappclone.com/images/uber-clone-taxi-business.png",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                resizeMode: "cover",
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontSize: 10,
                marginTop: 5,
                textAlign: "center",
              }}
            >
              Early Pickup
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            alignItems: "center",
            padding: 10,
          }}
        >
          <View
            style={tw`bg-gray-200 p-2  max-w-[90px] max-h-[90px] rounded-[10px]`}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGes3KJQOyHxCwl4PdjeMAYX1KFVb2ERsIa7RQ9JrPouLlxTn922fDu1vLJaPL0VwcJU4&usqp=CAU",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                resizeMode: "cover",
                alignSelf: "center",
              }}
            />
          </View>
          <View
            style={tw`bg-gray-200 p-2  max-w-[90px] max-h-[90px] rounded-[10px]`}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWlqutnvsUHZ88HLkF_vO0X2MLfGQiSBlbbWtQG0ylTqEGx56GhsfxQebP4kWN6w9iR4&usqp=CAU",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                resizeMode: "cover",
                alignSelf: "center",
              }}
            />
          </View>
          <View
            style={tw`bg-gray-200 p-2  max-w-[90px] max-h-[90px] rounded-[10px]`}
          >
            <Image
              source={{
                uri: "https://www.relinns.com/wp-content/uploads/2018/10/uber-taxi-bn.jpg",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                resizeMode: "cover",
                alignSelf: "center",
              }}
            />
          </View>
          <View
            style={tw`bg-gray-200 p-2  max-w-[90px] max-h-[90px] rounded-[10px]`}
          >
            <Image
              source={{
                uri: "https://thumbs.dreamstime.com/b/taxi-booking-online-order-car-mobile-phone-app-idea-transportation-internet-connection-isolated-flat-vector-illustration-134590015.jpg",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                resizeMode: "cover",
                alignSelf: "center",
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#000",
              fontWeight: "500",
            }}
          >
            Facilities
          </Text>
          <View>
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={400}
              itemWidth={340}
              covererCustomStyle={{ marginTop: 10, alignSelf: "center" }}
              layout={"default"}
              layoutCardOffset={18}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              enableMomentum={true}
              activeSlideAlignment={"start"}
              autoplay={true}
              autoplayDelay={1000}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({});
