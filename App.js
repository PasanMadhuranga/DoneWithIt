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
          elevation: 20,
          shadowColor: "grey", // Only works on iOS
          shadowOffset: { width: 10, height: 10 }, // Only works on iOS
          shadowOpacity: 1, // Only works on iOS, 1 is opaque, 0 is transparent
          shadowRadius: 10, // Only works on iOS, changes the shadow blur
          }}
      ></View>
    </View>
  );
}
