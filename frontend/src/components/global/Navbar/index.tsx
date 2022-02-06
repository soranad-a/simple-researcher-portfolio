/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ThreeBarsIcon, XIcon } from '@primer/octicons-react';
import { scrollToElementWithId } from 'components/AppContent/sections/Landing';
import { useContext, useEffect, useState } from 'react';
import { PALETTE } from 'services/const/AppConstants';
import LanguageContext from 'services/context/Language/LanguageContext';

const getStyles = () => {
    return {
        wrapper: css`
            position: fixed;
            z-index: 100;
            top: 10px;
            right: 10px;
            transition-duration: 0.25s;
            opacity: 1;

            @media (max-width: 600px) {
                top: 0;
                right: 0;
            }
        `,
        navbarRoot: css`
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            transition-duration: 0.25s;
        `,
        navbarItem: css`
            display: inline-block;
            cursor: pointer;
            padding: 10px 15px;
            border: none;
            transition-duration: 0.25s;
            opacity: 0.5;
            &:hover {
                border-bottom: 1px solid ${PALETTE.light};
                opacity: 1;
            }

            @media (max-width: 600px) {
                display: none;
                background-color: ${PALETTE.secondary};
            }
        `,
        navbarItemResponsive: css`
            @media (max-width: 600px) {
                display: block;
                test-align: right;
                opacity: 1;
            }
        `,
        selected: css`
            border-bottom: 1px solid ${PALETTE.light};
            opacity: 1;

            @media (max-width: 600px) {
                font-weight: bold;
            }
        `,
        icon: css`
            display: none;
            padding: 10px 15px;
            @media (max-width: 600px) {
                float: right;
                display: block;
            }
        `,
    };
};

type NavbarProps = {
    visible: boolean;
};

export const Navbar = (props: NavbarProps): JSX.Element => {
    const [currentPosition, setCurrentPosition] = useState(-1);
    const [navbarCollapsed, setNavbarCollapsed] = useState(true);
    const styles = getStyles();
    const { components } = useContext(LanguageContext).currentLanguageData;

    useEffect(() => {
        const aboutRect = document.getElementById('about-section');
        const experiencesRect = document.getElementById('experiences-section');
        const projectsRect = document.getElementById('projects-section');
        const contactRect = document.getElementById('contact-section');
        const scrollListener = () => {
            if (aboutRect?.getBoundingClientRect() && aboutRect.getBoundingClientRect().bottom > 0) {
                setCurrentPosition(0);
            } else if (experiencesRect?.getBoundingClientRect() && experiencesRect.getBoundingClientRect().bottom > 0) {
                setCurrentPosition(1);
            } else if (projectsRect?.getBoundingClientRect() && projectsRect.getBoundingClientRect().bottom > 0) {
                setCurrentPosition(2);
            } else if (contactRect?.getBoundingClientRect() && contactRect.getBoundingClientRect().bottom > 0) {
                setCurrentPosition(3);
            } else {
                setCurrentPosition(-1);
            }
        };
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    });

    return (
        <div css={styles.wrapper} style={{ opacity: props.visible ? 1 : 0 }}>
            <ul css={styles.navbarRoot}>
                <li
                    css={styles.icon}
                    onClick={() => {
                        setNavbarCollapsed(!navbarCollapsed);
                    }}
                >
                    {navbarCollapsed ? <ThreeBarsIcon size={16} /> : <XIcon size={16} />}
                </li>
                <li
                    css={css`
                        ${styles.navbarItem};
                        ${currentPosition == 0 ? styles.selected : ''};
                        cursor: ${props.visible ? 'pointer' : 'default'};
                        ${!navbarCollapsed ? styles.navbarItemResponsive : ''};
                    `}
                    onClick={() => scrollToElementWithId('about-section')}
                >
                    {components.about.title}
                </li>
                <li
                    css={css`
                        ${styles.navbarItem};
                        ${currentPosition == 1 ? styles.selected : ''};
                        cursor: ${props.visible ? 'pointer' : 'default'};
                        ${!navbarCollapsed ? styles.navbarItemResponsive : ''};
                    `}
                    onClick={() => scrollToElementWithId('experiences-section')}
                >
                    {components.experiences.title}
                </li>
                <li
                    css={css`
                        ${styles.navbarItem};
                        ${currentPosition == 2 ? styles.selected : ''};
                        cursor: ${props.visible ? 'pointer' : 'default'};
                        ${!navbarCollapsed ? styles.navbarItemResponsive : ''};
                    `}
                    onClick={() => scrollToElementWithId('projects-section')}
                >
                    {components.projects.title}
                </li>
                <li
                    css={css`
                        ${styles.navbarItem};
                        ${currentPosition == 3 ? styles.selected : ''};
                        cursor: ${props.visible ? 'pointer' : 'default'};
                        ${!navbarCollapsed ? styles.navbarItemResponsive : ''};
                    `}
                    onClick={() => scrollToElementWithId('contact-section')}
                >
                    {components.contact.title}
                </li>
            </ul>
        </div>
    );
};
