/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import { PALETTE } from 'services/const/AppConstants';
import { ALL_LANGUAGES } from 'services/const/LanguageData';
import LanguageContext from 'services/context/Language/LanguageContext';

const getStyles = () => {
    return {
        wrapper: css`
            position: fixed;
            bottom: 10px;
        `,
        nonSelected: css`
            cursor: pointer;
            margin-left: 10px;
            padding: 2px;
            transition: all 0.2s ease-in-out;
            &:hover {
                filter: brightness(1.15);
            }
        `,
        selected: css`
            cursor: pointer;
            margin-left: 10px;
            border-bottom: 1px solid ${PALETTE.light};
            padding: 2px;
        `,
    };
};

const LanguageSwitch = (): JSX.Element => {
    const { switchLanguage, language, currentLanguageData } = useContext(LanguageContext);
    const styles = getStyles();
    const allowedLanguageOptions = ALL_LANGUAGES;

    return (
        <div css={styles.wrapper}>
            {allowedLanguageOptions.map((label, index) => (
                <span
                    css={label == language ? styles.selected : styles.nonSelected}
                    key={index}
                    onClick={() => switchLanguage(label)}
                >
                    {currentLanguageData.languageNames[index]}
                </span>
            ))}
        </div>
    );
};

export default LanguageSwitch;
