/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Logo } from 'components/global/Logo';
import { Navbar } from 'components/global/Navbar';
import { ScrollUpArrow } from 'components/global/ScrollUpArrow';
import Snackbar from 'components/global/Snackbar';
import { useEffect, useLayoutEffect, useState } from 'react';
import About from './sections/About';
import Contact from './sections/Contact';
import { Landing } from './sections/Landing';
import Projects from './sections/Projects';
import SwitchableExperiences from './sections/SwitchableExperiences';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { DataProtection } from './sections/DataProtection';
import { Footer } from './sections/Footer';
import LanguageSwitch from 'components/global/LanguageSwitch';
import { CookieConsent } from 'components/global/CookieConsent';
import { AnalyticsWrapper } from 'components/global/AnalyticsWrapper';

const getStyles = () => {
    return {
        separator: css`
            height: 250px;
        `,
        fullWidthElement: css`
            width: 100%;
        `,
    };
};

export const AppContent = (): JSX.Element => {
    const [navbarAndLogoVisible, setNavbarAndLogoVisible] = useState(false);
    const styles = getStyles();

    useEffect(() => {
        const scrollListener = () => {
            if (
                (!navbarAndLogoVisible &&
                    document.documentElement.clientHeight <= document.documentElement.scrollTop) ||
                window.location.pathname.includes('data-protection')
            ) {
                setNavbarAndLogoVisible(true);
            } else if (
                navbarAndLogoVisible &&
                document.documentElement.clientHeight > document.documentElement.scrollTop
            ) {
                setNavbarAndLogoVisible(false);
            }
        };
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    });

    const contentWrapper = (
        <div css={styles.fullWidthElement}>
            <Navbar visible={navbarAndLogoVisible} />
            <Landing />
            <div css={styles.separator}></div>
            <About />
            <div css={styles.separator}></div>
            <SwitchableExperiences />
            <div css={styles.separator}></div>
            <Projects />
            <div css={styles.separator}></div>
            <Contact />
            <Footer />
        </div>
    );

    return (
        <div css={styles.fullWidthElement}>
            <Logo visible={navbarAndLogoVisible} />
            <ScrollUpArrow />
            <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={contentWrapper}></Route>
                        <Route path="/data-protection" element={<DataProtection />}></Route>
                        <Route path="*" element={contentWrapper}></Route>
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
            <CookieConsent />
            <LanguageSwitch />
            <Snackbar />
            <AnalyticsWrapper />
        </div>
    );
};

const ScrollToTop = (props: { children: JSX.Element }): JSX.Element => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return props.children;
};
