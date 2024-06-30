import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MaterialCommunityIcons name="email" size={100} color="pink" />
    </View>
  );
}
