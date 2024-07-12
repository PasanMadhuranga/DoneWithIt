import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect } from "react";

import Screen from "./app/components/Screen";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <GestureHandlerRootView>
      <Screen>
        </Screen>
    </GestureHandlerRootView>
  );
}
