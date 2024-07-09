import { GestureHandlerRootView } from "react-native-gesture-handler";


import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <AppPicker icon={"apps"} placeholder={"Category"} />
      </Screen>
    </GestureHandlerRootView>
  );
}
