import React, { Component } from "react";

import { ScreenA } from "./ScreenA";
import { ScreenB } from "./ScreenB";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export class NestedStackNavigationA extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name={"ScreenA"} component={ScreenA} />
        <Stack.Screen name={"ScreenB"} component={ScreenB} />
      </Stack.Navigator>
    );
  }
}
