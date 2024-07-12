import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";

import { ListingEditScreen } from "./app/screens/ListingEditScreen";

export default function App() {

  return (
    <GestureHandlerRootView>
      <ListingEditScreen />
    </GestureHandlerRootView>
  );
}
