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
          width: 200,
          height: 200,
          padding: 20,
          }}
      >
        <View
          style={{
            backgroundColor: "gold",
            width: 75,
            height: 75,
            
            }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 200,
          height: 200,
          margin: 20,
          }}
      >
      </View>
    </View>
  );
}
