import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <ImageInputList />
      </Screen>
    </GestureHandlerRootView>
  );
}
