import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

const i18n = new I18n({
  en: { welcome: "Hello!" },
  ja: { welcome: "いらっしゃいませ!" },
});

i18n.locale = getLocales()[0].languageCode;
console.log(i18n.t("welcome"));

export default function App() {
  const deviceLanguage = getLocales()[0].languageCode;
  console.log(deviceLanguage);
  return (
    <View style={styles.container}>
      <Text>{deviceLanguage}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
