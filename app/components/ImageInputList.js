import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList() {
  const [imageUris, setImageUris] = useState([]);
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <ImageInput
          key={uri}
          imageUri={uri}
          onChangeImage={() =>
            setImageUris(imageUris.filter((imageUri) => imageUri !== uri))
          }
          style={styles.image}
        />
      ))}
      <ImageInput onChangeImage={(uri) => setImageUris([...imageUris, uri])} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
    width: 100,
    height: 100,
  },
});

export default ImageInputList;
