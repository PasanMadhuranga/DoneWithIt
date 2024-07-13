import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color="white" size={40} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 70,
    height: 70,
    borderRadius: 35,
    bottom: 25, // this is the distance from the bottom of the screen
    borderColor: "white",
    borderWidth: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewListingButton;
