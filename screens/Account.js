import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { API } from "../constant/API";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
  const navigate = useNavigation();
  const [active, setActive] = useState(false);

  const [data, setData] = useState({});

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
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

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
            backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg",
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
                <TextInput style={styles.input} />
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
                <TextInput style={styles.input} />
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
                <TextInput style={styles.input} />
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
                <TextInput style={styles.input} />
              </View>

              <View
                style={{
                  marginTop: 50,
                  marginBottom: 100,
                }}
              >
                <TouchableOpacity
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
