import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.use(HttpApi)
	.init({
		fallbackLng: "ar",
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: [
				"cookie",
				"htmlTag",
				"querystring",
				"localStorage",
				"sessionStorage",
				"navigator",
				"path",
				"subdomain",
			],
			caches: ["cookie"],
		},
		backend: {
			loadPath: "./locales/{{lng}}/{{ns}}.json",
			addPath: "./locales/{{lng}}/{{ns}}.missing.json",
			allowMultiLoading: false,
			crossDomain: false,
			withCredentials: false,
			overrideMimeType: false,
			requestOptions: {
				mode: "cors",
				credentials: "same-origin",
				cache: "default",
			},
		},
	});

export default i18n;
