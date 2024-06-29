// import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row", // default is column
        justifyContent: "center", // main axis
        alignItems: "center", // cross axis
        alignContent: "center", // only works with wrap 
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 300,
        }}
      />
      <View
        style={{
          backgroundColor: "orange",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "pink",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
