import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { API } from "../constant/API";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Account = () => {
  const navigate = useNavigation();
  const [active, setActive] = useState(false);
  const [data, setData] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      const ID = JSON.parse(jsonValue).id;
      // console.log(ID);

      const response = await fetch(`${API}/getuser/${ID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data.data);

      setName(data.data.name);
      setEmail(data.data.email);
      setAddress(data.data.address);
      setPhone(data.data.phone);
    
  } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // code to update data
  const updateData = async () => {
    const jsonValue = await AsyncStorage.getItem("user");
    const ID = JSON.parse(jsonValue).id;
    const response = await fetch(`${API}/signup/update/${ID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        address: address,
        phone: phone,
      }),
    });
    const data = await response.json();
    console.log(data);
    alert(data.message);
    if (data.message === "User updated successfully") {
      getData();
    }
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        padding: 20,
      }}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: 400,
            }}
          >
            Account Info
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                AsyncStorage.removeItem("token")
                  .then(() => {
                    navigate.navigate("HomeScreen");
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
            >
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            height: 100,
            width: 100,
            borderRadius: 100,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            }}
            style={{ width: 90, height: 90, borderRadius: 65 }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              Basic info
            </Text>
            {active === true ? (
              <View>
                <TouchableOpacity
                  onPress={() => setActive(false)}
                  style={{
                    backgroundColor: "black",
                    padding: 2,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: 500,
                      padding: 5,
                    }}
                  >
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  onPress={() => setActive(true)}
                  style={{
                    backgroundColor: "black",
                    padding: 2,
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: 500,
                      padding: 5,
                    }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
          {active === true ? (
            <View
              style={{
                marginTop: 20,
              }}
            >
              <View style={styles.cont}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                  }}
                >
                  Name
                </Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  placeholder={data.name}
                  onChangeText={(text) => setName(text)}
                />
              </View>
              <View style={styles.cont}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                  }}
                >
                  Email
                </Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholder={data.email}
                />
              </View>
              <View style={styles.cont}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                  }}
                >
                  Address
                </Text>
                <TextInput
                  style={styles.input}
                  value={address}
                  placeholder={data.address}
                  onChangeText={(text) => setAddress(text)}
                />
              </View>
              <View style={styles.cont}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                  }}
                >
                  Phone
                </Text>
                <TextInput
                  style={styles.input}
                  value={phone}
                  placeholder={data.phone}
                  onChangeText={(text) => setPhone(text)}
                />
              </View>

              <View
                style={{
                  marginTop: 50,
                  marginBottom: 100,
                }}
              >
                <TouchableOpacity
                  onPress={updateData}
                  style={{
                    backgroundColor: "black",
                    padding: 2,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                      fontWeight: 500,
                      padding: 10,
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View
              style={{
                marginTop: 20,
              }}
            >
              <View style={styles.maincont}>
                <Text style={styles.inputcontainer}>Name</Text>
                <Text style={styles.datainp}>{data.name}</Text>
              </View>
              <View style={styles.maincont}>
                <Text style={styles.inputcontainer}>Email</Text>
                <Text style={styles.datainp}>{data.email}</Text>
              </View>
              <View style={styles.maincont}>
                <Text style={styles.inputcontainer}>Address</Text>
                <Text style={styles.datainp}>{data.address}</Text>
              </View>
              <View style={styles.maincont}>
                <Text style={styles.inputcontainer}>Phone</Text>
                <Text style={styles.datainp}>{data.phone}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Account;
const styles = StyleSheet.create({
  cont: {
    margin: 10,
  },
  maincont: {
    margin: 10,
  },
  inputcontainer: {
    fontSize: 17,
    fontWeight: 400,
  },
  datainp: {
    fontSize: 17,
    fontWeight: 400,
    color: "gray",
    padding: 5,
    marginTop: 10,
    borderBottomWidth: 0.9,
    borderBottomColor: "gray",
  },
  input: {
    height: 50,
    fontSize: 17,
    color: "gray",
    borderBottomWidth: 0.9,
  },
});
