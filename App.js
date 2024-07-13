import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/Screen";

const Tweets = () => {
  return (
    <Screen>
      <Text>Tweets</Text>
    </Screen>
  );
};

const TweetDetails = () => {
  return (
    <Screen>
      <Text>Tweet Details</Text>
    </Screen>
  );
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
