import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CounterScreen } from "./src/screens/CounterScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <CounterScreen />
    </SafeAreaProvider>
  );
}
