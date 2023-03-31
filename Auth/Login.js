import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements/dist/icons/Icon";
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";
import { API } from "../constant/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigate = useNavigation();
  const [value, setValue] = useState();
  const [formattedValue, setFormattedValue] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // console.log(value, password);
    const response = await fetch(`${API}/login/mobile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: value,
        password: password,
      }),
    });
    const data = await response.json();
    // console.log(data);

    if (data.status === "success") {
      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      navigate.navigate("MainScreen");
    } else {
      alert("Invalid Credentials");
      navigate.navigate("Login");
    }
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
        }}
      >
        <View>
          <Image
            source={{
              uri: "https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png",
            }}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "contain",
            }}
          />
        </View>
        <Text style={tw`text-2xl mt-4 `}>Enter your mobile number</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <PhoneInput
            defaultCode="IN"
            layout="first"
            withShadow
            autoFocus
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.textInput}
            onChangeText={(text) => {
              setValue(text);
            }}
            value={value}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Password"
            style={{
              borderWidth: 1,
              borderColor: "#e1dede",
              padding: 10,
              borderRadius: 5,
              fontSize: 18,
            }}
            // secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
            }}
          >
            OR
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e1dede",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginRight: 10,
              }}
            >
              Continue with Google
            </Text>
            <Icon name="google" size={17} type="antdesign" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e1dede",
              padding: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginRight: 10,
              }}
            >
              Continue with Apple
            </Text>
            <Icon name="apple1" size={17} type="antdesign" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            // onPress={() => navigate.navigate("MainScreen")}
            onPress={handleLogin}
            style={{
              backgroundColor: "black",
              padding: 10,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  phoneContainer: {
    width: "100%",
    height: 50,
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    width: "75%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  textInput: {
    paddingVertical: 0,
  },
});
