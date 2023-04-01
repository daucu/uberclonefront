import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
const ChangePassword = () => {


  return (
    <ScrollView style={styles.container}>
      <View style={styles.inside}>
        <Text style={styles.insidetext}>ChangePassword</Text>
        <View>
          <MaterialCommunityIcons name="shield-key" size={30} color="black" />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.middletext}>
          You can change your password by entering your current password and
          then entering your new password.
        </Text>
        <View style={styles.inputcont}>
          <TextInput style={styles.inp} placeholder="Current Password" />
        </View>
        <View style={styles.inputcont}>
          <TextInput style={styles.inp} placeholder="New Password" />
        </View>
        <View style={styles.inputcont}>
          <TextInput style={styles.inp} placeholder="Confirm Password" />
        </View>
        <View style={styles.inputcont}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  inside: {
    // marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  insidetext: {
    fontSize: 30,
    fontWeight: "bold",
  },
  middle: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  middletext: {
    fontSize: 17,
    fontWeight: 300,
  },
  inputcont: {
    marginTop: 30,
    width: "100%",
  },
  inp: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 10,
    fontSize: 17,
  },
  btn: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
