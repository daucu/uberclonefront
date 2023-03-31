import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";

const Account = () => {
  const [active, setActive] = useState(false);
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        padding: 20,
        
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 400,
          }}
        >
          Account Info
        </Text>
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
            style={{ width: 100, height: 100, borderRadius: 65 }}
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
              <View>
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
              <View
                style={{
                  marginTop: 11,
                }}
              >
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
              <View
                style={{
                  marginTop: 20,
                }}
              >
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
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                  }}
                >
                  Name
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 500,
                    color: "gray",
                    // borderbottim
                    borderBottomWidth: 0.5,
                    borderColor: "gray",
                    paddingBottom: 8,
                    marginTop: 4,
                  }}
                >
                  Username
                </Text>
              </View>
              <View
                style={{
                  marginTop: 11,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                  }}
                >
                  Email
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 500,
                    color: "gray",
                    // borderbottim
                    borderBottomWidth: 0.5,
                    borderColor: "gray",
                    paddingBottom: 8,
                    marginTop: 4,
                  }}
                >
                  Email
                </Text>
              </View>
              <View
                style={{
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 400,
                  }}
                >
                  Phone
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 500,
                    color: "gray",
                    // borderbottim
                    borderBottomWidth: 0.5,
                    borderColor: "gray",
                    paddingBottom: 8,
                    marginTop: 4,
                  }}
                >
                  7845125869
                </Text>
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
  input: {
    height: 40,
    marginTop: 1,
    fontSize: 17,
    color: "gray",
    borderBottomWidth: 0.5,
  },
});
