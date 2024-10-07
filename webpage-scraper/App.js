import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigation } from "./src/navigations/RootNavigation";
import { RecoilRoot } from "recoil";
import { RecoilCustomPersist } from "./src/hook/RecoilCustomPersist";

export default function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <RecoilCustomPersist>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </RecoilCustomPersist>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
