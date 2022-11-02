import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import Main from "./src/screens/Main";
import SignUp from "./src/screens/SingUp";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
