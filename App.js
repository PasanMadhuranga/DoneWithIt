import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View } from "react-native";

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          borderColor: "gold",
          borderWidth: 10,
          borderRadius: 30,
          borderTopLeftRadius: 50,
          borderBottomWidth: 20,
          }}
      ></View>
    </View>
  );
}
