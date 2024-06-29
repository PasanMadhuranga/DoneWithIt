// import { StatusBar } from "expo-status-bar";
import {
  View,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <View
        style={{
          backgroundColor: "dodgerblue",
         flex: 3,
        }}
      />
      <View
        style={{
          backgroundColor: "red",
         flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "orange",
         flex: 2,
        }}
      />
    </View>
  );
}

