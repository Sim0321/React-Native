import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "./src/hook/useTranslation";
import Button from "./src/components/Button";
import { useCookie } from "./src/hook/useCookie";

import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { locale, setLocale, t } = useTranslation();
  const { cookieKey } = useCookie();
  // console.log(t);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (locale !== null && cookieKey !== "") {
      setIsLoaded(true);
    }
  }, [locale, cookieKey]);

  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  // if (locale === null || cookieKey === "") return null;

  return (
    <View style={styles.container}>
      <Text>{t(cookieKey)}</Text>

      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => setLocale("ko")}
          isSelected={locale === "ko"}
          text="KO"
        />
        <Button
          onPress={() => setLocale("en")}
          isSelected={locale === "en"}
          text="EN"
        />
        <Button
          onPress={() => setLocale("ja")}
          isSelected={locale === "ja"}
          text="JA"
        />
        <Button
          onPress={() => setLocale("zh")}
          isSelected={locale === "zh"}
          text="ZH"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
