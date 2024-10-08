import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CounterScreen } from "./src/screens/CounterScreen";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { createContext, useState } from "react";
import { RecoilRoot } from "recoil";

export const CounterContext = createContext();

export default function App() {
  const counterState = useState(0);
  return (
    <SafeAreaProvider>
      {/* Redux */}
      {/* <Provider store={store}>
        <CounterScreen />
      </Provider> */}

      {/* Context API */}
      {/* <CounterContext.Provider value={counterState}>
        <CounterScreen />
      </CounterContext.Provider> */}

      <RecoilRoot>
        <CounterScreen />
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
