import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
const image = require("../assets/bg2.jpg");
const Wallet = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.container}
          source={image}
          resizeMode="cover"
          borderRadius={10}
        >
          <View style={styles.cont}>
            <Text style={styles.paragraph}>Uber Cash</Text>
            <TouchableOpacity style={styles.addbtn}>
              <Text style={styles.btntext}>+ Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cont}>
            <Text style={styles.price}>$97.30</Text>
            <TouchableOpacity
              style={{
                padding: 7,
                color: "black",
              }}
            >
              <Entypo name="trophy" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Wallet;
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  cont: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#34495e",
  },
  addbtn: {
    padding: 7,
    borderRadius: 7,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "rgba(022,021,12,103.2)",
  },
  btntext: {
    color: "white",
    fontWeight: 500,
    fontSize: 19,
  },
  price: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: "bold",
    color: "#34495e",
  },
});
