import AppText from "./app/components/AppText";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View, Text } from "react-native";

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>
        Hello World lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </AppText>
    </View>
  );
}
