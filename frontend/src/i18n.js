import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        "Sign Up": "Sign Up",
        "Password mistmatch": "Password mistmatch",
        Username: "Username",
        "Display Name": "Display Name",
        Password: "Password",
        "Password Repeat": "Password Repeat",
        Login: "Login",
      },
    },
    tr: {
      translations: {
        "Sign Up": "Kayit Ol",
        "Password mistmatch": "Ayni sifreyi girdiniz",
        Username: "Kullanici Adi",
        "Display Name": "Görünen Ad",
        Password: "Sifre",
        "Password Repeat": "Tekrar Sifre",
        Login: "Giris Yap",
      },
    },
  },
  fallbackLng: "tr",
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
  },
});
export default i18n;
