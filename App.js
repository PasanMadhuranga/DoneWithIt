import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View, Text } from "react-native";

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          color: "tomato",
          fontSize: 30,
          fontWeight: "bold",
          fontStyle: "italic",
          // textDecorationLine: "underline",
          fontFamily: "Roboto", // font families are different for android and ios
          lineHeight: 40,
          textAlign: "center",
        }}
      >
        Hello World lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Text>
    </View>
  );
}
