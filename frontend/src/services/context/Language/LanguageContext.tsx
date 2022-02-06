import { createContext, useLayoutEffect, useState } from 'react';
import { APP_NAME } from 'services/const/AppConstants';
import { ALL_LANGUAGES, Language, LanguageData, LANGUAGE_DATA } from 'services/const/LanguageData';

type LanguageContextType = {
    language: typeof ALL_LANGUAGES[number];
    currentLanguageData: LanguageData;
    switchLanguage: (newLanguage: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
    language: ALL_LANGUAGES[0],
    currentLanguageData: LANGUAGE_DATA[ALL_LANGUAGES[0]],
    switchLanguage: () => null,
});

export default LanguageContext;

// use the context with const { ... } = useContext(LanguageContext).currentLanguageData
export const LanguageProvider = (props: { children: JSX.Element }): JSX.Element => {
    const [language, setLanguage] = useState(
        window.localStorage.getItem(APP_NAME.replaceAll(' ', '') + '-lang') || window.navigator.language,
    );
    if (!ALL_LANGUAGES.includes(language)) {
        setLanguage(ALL_LANGUAGES[0]);
    }
    useLayoutEffect(() => {
        const selectedLang = window.localStorage.getItem(APP_NAME.replaceAll(' ', '') + '-lang');
        if (selectedLang) {
            setLanguage(selectedLang);
        }
    }, [language]);

    const switchLanguage = (newLanguage: Language): void => {
        setLanguage(newLanguage);
        window.localStorage.setItem(APP_NAME.replaceAll(' ', '') + '-lang', newLanguage);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                switchLanguage,
                currentLanguageData: LANGUAGE_DATA[language],
            }}
        >
            {props.children}
        </LanguageContext.Provider>
    );
};
