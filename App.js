import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-native";

import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  }

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  }

  return (
    <GestureHandlerRootView>
      <Screen>
        <Button title="Select Image" onPress={selectImage} />
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
        </Screen>
    </GestureHandlerRootView>
  );
}
