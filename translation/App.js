import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "./src/hook/useTranslation";
import Button from "./src/components/Button";
import { useCookie } from "./src/hook/useCookie";

import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import LoadingView from "./src/components/LoadingView";
import LottieView from "lottie-react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { locale, setLocale, t, format } = useTranslation();
  const { cookieKey } = useCookie();
  // console.log(t);

  const [isLoaded, setIsLoaded] = useState(false);

  const locales = ["ko", "en", "ja", "zh", "es"];

  const y = new Date().getFullYear();
  const m = new Date().getMonth() + 1;
  const d = new Date().getDate();

  const todayText = format(t("today_is"), y, m, d);

  useEffect(() => {
    if (cookieKey !== "") {
      setIsLoaded(true);
    }
  }, [cookieKey]);

  useEffect(() => {
    if (locale !== null) {
      SplashScreen.hideAsync();
    }
  }, [locale]);

  if (!isLoaded) return <LoadingView />;

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        source={require("./assets/background.json")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
        }}
      />

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <Text style={styles.todayText}>{todayText}</Text>
          <Text style={styles.cookieText}>{t(cookieKey)}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.buttonsContainer}>
            {locales.map((item) => (
              <Button
                key={item}
                onPress={() => setLocale(item)}
                isSelected={locale === item}
                text={item.toUpperCase()}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topContainer: {
    flex: 3,
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  todayText: {
    position: "absolute",
    top: 70,
    fontSize: 13,
    color: "#8b658f",
  },
  cookieText: {
    fontSize: 22,
    color: "#372538",
    textAlign: "center",
    marginHorizontal: 30,
  },
  bottomContainer: {
    flex: 1,
    // backgroundColor: "skyblue",
    justifyContent: "flex-end",
  },

  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 25,
  },
});
