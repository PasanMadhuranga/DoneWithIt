import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {

  return (
    <GestureHandlerRootView>
      <MessagesScreen />
    </GestureHandlerRootView>
  );
}
