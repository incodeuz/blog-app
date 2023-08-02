import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { uz } from "./public/locales/uz";
import { en } from "./public/locales/en";

i18n.use(initReactI18next).init({
  fallbackLng: "uz",
  lng: "uz",
  resources: {
    uz: { translation: uz },
    en: { translation: en },
  },
});

export default i18n;
