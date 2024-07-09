import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <GestureHandlerRootView>
      <Screen>
        <AppPicker 
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        icon={"apps"} placeholder={"Category"} items={categories} />
      </Screen>
    </GestureHandlerRootView>
  );
}
