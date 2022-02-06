/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { scrollToElementWithId } from 'components/AppContent/sections/Landing';
import { useContext } from 'react';
import { PALETTE } from 'services/const/AppConstants';
import LanguageContext from 'services/context/Language/LanguageContext';

const getStyles = () => {
    return {
        wrapper: css`
            position: fixed;
            z-index: 10;
            top: 10px;
            left: 10px;
            text-align: center;
            transition-duration: 0.25s;
            &:hover * {
                opacity: 1;
            }
        `,
        upperDiv: css`
            border-bottom: 1px solid ${PALETTE.light};
            text-transform: uppercase;
            transition-duration: 0.25s;
            padding: 0 10px 3px 10px;
            opacity: 0.5;
        `,
        lowerDiv: css`
            text-transform: uppercase;
            transition-duration: 0.25s;
            padding-top: 3px;
            opacity: 0.5;
        `,
    };
};

type LogoProps = {
    visible: boolean;
};

export const Logo = (props: LogoProps): JSX.Element => {
    const styles = getStyles();
    const { logo } = useContext(LanguageContext).currentLanguageData.components;

    return (
        <div
            css={styles.wrapper}
            style={{ opacity: props.visible ? 1 : 0, cursor: props.visible ? 'pointer' : 'default' }}
            onClick={() => scrollToElementWithId('landing-section')}
        >
            <div css={styles.upperDiv}>{logo.upperText}</div>
            <div css={styles.lowerDiv}>{logo.lowerText}</div>
        </div>
    );
};
