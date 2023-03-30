import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { Store } from "./Store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Body from "./screens/Body";
import Profile from "./screens/Profile";
import MainScreen from "./screens/MainScreen";
import Activity from "./screens/Activity";
import Services from "./screens/Services";
import Account from "./screens/Account";
export default function App() {
  const Stack = createNativeStackNavigator();
  // disable yellow warnings
  return (
    <Provider store={Store}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="Body"
              component={Body}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ActiviytScreen"
              component={Activity}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="Services"
              component={Services}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{
                headerShown: true,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
