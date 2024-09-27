import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { useEffect, useState } from "react";

const ko = require("../lang/lang.ko.json");
const en = require("../lang/lang.en.json");
const ja = require("../lang/lang.ja.json");
const zh = require("../lang/lang.zh.json");

const i18n = new I18n({
  ko,
  en,
  ja,
  zh,
});

console.log(i18n);

const deviceLanguage = getLocales()[0].languageCode;

export const useTranslation = () => {
  return {
    t: (key) => i18n.t(key),
  };
};
