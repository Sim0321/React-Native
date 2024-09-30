import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreeA } from "./src/ScreenA";
import { ScreeB } from "./src/ScreenB";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreeA} />
        <Stack.Screen name="ScreenB" component={ScreeB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
