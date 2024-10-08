import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator screenOptions={{presentation: "modal"}} >
    <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} options={{headerShown: false}} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
      options={{ title: "Listing Details" }}
    />
  </Stack.Navigator>
);
