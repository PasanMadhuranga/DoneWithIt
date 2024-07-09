import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { View, TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";

import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <GestureHandlerRootView>
      <Screen>
        <AppTextInput placeholder="Username" icon="email" keyboardType="numeric" />
      </Screen>
    </GestureHandlerRootView>
  );
}
