import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// header
import headerEN from "@locales/en/header.json";
import headerAR from "@locales/ar/header.json";

// hero
import heroEN from "@locales/en/hero.json";
import heroAR from "@locales/ar/hero.json";

// services
import servicesEN from "@locales/en/services.json";
import servicesAR from "@locales/ar/services.json";

// projects
import projectsEN from "@locales/en/projects.json";
import projectsAR from "@locales/ar/projects.json";

// Contact
import contactEN from "@locales/en/contact.json";
import contactAR from "@locales/ar/contact.json";

// footer
import footerEN from "@locales/en/footer.json";
import footerAR from "@locales/ar/footer.json";

const resources = {
  ar: {
    header: headerAR,
    hero: heroAR,
    services: servicesAR,
    projects: projectsAR,
    contact: contactAR,
    footer: footerAR,
  },
  en: {
    header: headerEN,
    hero: heroEN,
    services: servicesEN,
    projects: projectsEN,
    contact: contactEN,
    footer: footerEN,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
