/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ChevronLeftIcon } from '@primer/octicons-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from 'services/context/Language/LanguageContext';

const getStyles = () => {
    return {
        wrapper: css`
            max-width: 800px;
            margin: 10px auto;
            position: relative;

            @media (max-width: 800px) {
                width: 100%;
            }
        `,
    };
};

export const DataProtection = (): JSX.Element => {
    const styles = getStyles();
    const { dataProtection } = useContext(LanguageContext).currentLanguageData.components;

    return (
        <div css={styles.wrapper}>
            <Link to="/" id="landing-section">
                <ChevronLeftIcon size={'small'} verticalAlign="text-top" />
                {dataProtection.back}
            </Link>

            <h1>{dataProtection.title}</h1>
            {dataProtection.content}
        </div>
    );
};
