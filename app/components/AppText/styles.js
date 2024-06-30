import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "green",
    fontSize: 30,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
  },
});

export default styles;
