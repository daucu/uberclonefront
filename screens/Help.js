import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
const Help = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <View>
        <Text style={{ fontSize: 25, fontWeight: "500" }}>
          How to use the app?
        </Text>
        <Text style={styles.inp}>1. Add your pick up location</Text>
        <Text style={styles.inp}>2. Add your drop off location</Text>
        <Text style={styles.inp}>3. Select your car type</Text>
        <Text style={styles.inp}>4. Select price range</Text>
        <Text style={styles.inp}>5. Select your payment method</Text>
        <Text style={styles.inp}>6. Confirm your booking</Text>
        <Text style={styles.inp}>7. Wait for your driver to arrive</Text>
        <Text style={styles.inp}>8. Driver will take the OTP from you</Text>
        <Text style={styles.inp}>9. Enjoy your ride</Text>
        <Text style={styles.inp}>10. Rate your driver</Text>
      </View>
      <View>
        <Text style={{ fontSize: 21, fontWeight: "400", marginTop: 50 }}>
          Don't forget to tie your seatbelt!
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 300,
              paddingBottom: 50,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "300",
                marginTop: 20,
              }}
            >
              If you have any questions, please talk to our customer service
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                padding: 10,
                borderRadius: 7,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Contact us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({
  inp: {
    fontSize: 15,
    fontWeight: "400",
    color: "gray",
    marginTop: 10,
  },
});
