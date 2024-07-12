import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {

  return (
    <GestureHandlerRootView>
      <WelcomeScreen />
    </GestureHandlerRootView>
  );
}
