import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";


export default function App() {

  return (
    <GestureHandlerRootView>
      <RegisterScreen />
    </GestureHandlerRootView>
  );
}
