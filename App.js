import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AccountScreen from "./app/screens/AccountScreen";


export default function App() {
  return (
    <GestureHandlerRootView>
      <AccountScreen />
    </GestureHandlerRootView>
  );
}
