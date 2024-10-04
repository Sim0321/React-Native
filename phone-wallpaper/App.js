import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigations } from "./src/navigations/BottomTabNavigations";
import { RootStackNavigations } from "./src/navigations/RootStackNavigation";
import { Provider } from "react-redux";
import store from "./src/store/store";

export default function App() {
  return (
    <NavigationContainer>
      {/* <BottomTabNavigations /> */}
      <Provider store={store}>
        <RootStackNavigations />
      </Provider>
    </NavigationContainer>
  );
}
