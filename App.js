import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";

import LoginScreen from "./app/screens/LoginScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <GestureHandlerRootView>
      <LoginScreen />
    </GestureHandlerRootView>
  );
}
