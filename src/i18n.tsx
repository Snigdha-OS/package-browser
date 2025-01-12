import i18n             from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import {
    initReactI18next
} from "react-i18next";

import {
    LOCALES
} from './locales';

const resources = Object.fromEntries(
    Object.entries(LOCALES).map(([key, value]) => [
        key.toLowerCase(),

        {
            translation: value
        }
    ])
);

i18n.use(initReactI18next).use(LanguageDetector).init({
    resources,
    fallbackLng: (localStorage.getItem('selectedLanguage') || "en"),

    interpolation: {
        escapeValue: false
    },

    detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage']
    }
});

export const translate = (key: string, options?: {
    [key: string]: any
}): string => {
    return i18n.t(key, options);
};

export default i18n;
