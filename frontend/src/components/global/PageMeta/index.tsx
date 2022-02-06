import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { APP_NAME } from 'services/const/AppConstants';
import LanguageContext from 'services/context/Language/LanguageContext';

export const PageMeta = (): JSX.Element => {
    const { hero } = useContext(LanguageContext).currentLanguageData.components;
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{APP_NAME}</title>
            <meta name="description" content={`${hero.heading} - ${hero.subHeading}`} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@300&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    );
};
