import React from "react";
import { View, StyleSheet } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View style={styles.image} key={uri}>
          <ImageInput
            imageUri={uri}
            onChangeImage={() => onRemoveImage(uri)}
          />
        </View>
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    marginRight: 10,
    width: 100,
    height: 100,
  },
});

export default ImageInputList;
