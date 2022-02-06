/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import LanguageContext from 'services/context/Language/LanguageContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const getStyles = () => {
    return {
        wrapper: css`
            width: 100%;
            text-align: center;
            padding-top: 250px;
            margin-bottom: 10px;
            position: relative;
        `,
        link: css`
            margin-right: 10px;
        `,
        attribution: css`
            margin-top: 10px;
        `,
    };
};

export const Footer = (): JSX.Element => {
    const styles = getStyles();
    const { footer, dataProtection } = useContext(LanguageContext).currentLanguageData.components;

    const links = footer.links.map((linkData, index) => {
        return (
            <a href={linkData.href} target="_blank" rel="noreferrer" key={index} css={styles.link}>
                {linkData.name}
            </a>
        );
    });

    return (
        <div css={styles.wrapper}>
            <div>
                {links}
                <Link to="/data-protection">{dataProtection.title}</Link>
            </div>
            <div css={styles.attribution}>
                Template by{' '}
                <a href="https://sora-art.de" target="_blank" rel="noreferrer">
                    Nadja Adam
                </a>
            </div>
        </div>
    );
};
