import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CounterScreen } from "./src/screens/CounterScreen";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { createContext, useState } from "react";

export const CounterContext = createContext();

export default function App() {
  const counterState = useState(0);
  return (
    <SafeAreaProvider>
      {/* Redux */}
      {/* <Provider store={store}>
        <CounterScreen />
      </Provider> */}

      <CounterContext.Provider value={counterState}>
        <CounterScreen />
      </CounterContext.Provider>
    </SafeAreaProvider>
  );
}
