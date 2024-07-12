import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";

import LoginScreen from "./app/screens/LoginScreen";

export default function App() {

  return (
    <GestureHandlerRootView>
      <LoginScreen />
    </GestureHandlerRootView>
  );
}
