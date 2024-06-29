// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const orientation = useDeviceOrientation()
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "red", width: "50%", height: orientation === "landscape" ? "100%" : "30%" }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
