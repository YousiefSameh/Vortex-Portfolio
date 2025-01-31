import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		fallbackLng: "ar",
		debug: true,
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json",
			addPath: "/locales/{{lng}}/{{ns}}.missing.json",
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
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
