import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ar",
    debug: false, // تعطيل وضع التصحيح
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["header", "hero", "services", "projects", "contact", "footer"],
    defaultNS: "header",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;