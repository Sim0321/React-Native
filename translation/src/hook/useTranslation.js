import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ko = require("../lang/lang.ko.json");
const en = require("../lang/lang.en.json");
const ja = require("../lang/lang.ja.json");
const zh = require("../lang/lang.zh.json");

const LOCALE_KEY = "locale";

const i18n = new I18n({
  ko,
  en,
  ja,
  zh,
});

i18n.enableFallback = true;
i18n.defaultLocale = "en";

// console.log(i18n);

const deviceLanguage = getLocales()[0].languageCode;

export const useTranslation = () => {
  const [locale, _setLocale] = useState(null);

  const setLocale = (v) => {
    _setLocale(v);
    AsyncStorage.setItem(LOCALE_KEY, v);
  };

  const init = async () => {
    // fromStorage
    const fs = await AsyncStorage.getItem(LOCALE_KEY);
    if (fs !== null) {
      _setLocale(fs);
    } else {
      _setLocale(deviceLanguage);
    }
  };

  useEffect(() => {
    init();
    // setLocale("ja");
  }, []);

  return {
    locale,
    setLocale,
    t: (key) => i18n.t(key, { locale }),
  };
};
