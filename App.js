import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { useState } from "react";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return (
    <GestureHandlerRootView>
      <Screen>
        <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
