/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Button } from 'components/shared/Button';
import { useContext, useState } from 'react';
import { APP_NAME, PALETTE } from 'services/const/AppConstants';
import LanguageContext from 'services/context/Language/LanguageContext';

const getStyles = () => {
    return {
        wrapper: css`
            position: fixed;
            bottom: 10px;
            right: 10px;
            z-index: 100;
            margin: 10px auto;
            background-color: ${PALETTE.secondary};
            border-radius: 5px;
            box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.3);
            padding: 10px;
            @media (max-width: 600px) {
                left: 10px;
            }
        `,
        toggleWrapper: css`
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin-top: 10px;
            align-items: center;
            margin-left: 20px;
        `,
        toggleLabel: css`
            max-width: 70%;
        `,
        switch: css`
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            margin-left: 20px;
            margin-right: 20px;
        `,
        switchInput: css`
            opacity: 0;
            width: 0;
            height: 0;
        `,
        slider: css`
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${PALETTE.light};
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 34px;

            &:before {
                position: absolute;
                content: '';
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                -webkit-transition: 0.4s;
                transition: 0.4s;
                border-radius: 50%;
            }
        `,
        sliderChecked: css`
            background-color: ${PALETTE.tertiary};

            &:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
            }
        `,
        buttonRow: css`
            float: right;
            margin-top: 10px;
        `,
        buttonWrapper: css`
            margin-left: 10px;
            @media (max-width: 600px) {
                margin-left: 0;
            }
        `,
        button: css`
            display: inline-block;
            @media (max-width: 600px) {
                width: 100%;
                margin: 10px 0 0 0;
            }
        `,
    };
};

export const CookieConsent = (): JSX.Element | null => {
    const styles = getStyles();
    const { cookieNotice } = useContext(LanguageContext).currentLanguageData.components;
    const [analyticsAccepted, setAnalyticsAccepted] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);

    if (window.localStorage.getItem(APP_NAME.replaceAll(' ', '') + '-cookiesAccepted') == 'true' || submitted) {
        return null;
    }

    const submitSelection = (submittedAnalyticsAccepted = false) => {
        window.localStorage.setItem(APP_NAME.replaceAll(' ', '') + '-cookiesAccepted', 'true');
        window.localStorage.setItem(
            APP_NAME.replaceAll(' ', '') + '-analyticsAccepted',
            submittedAnalyticsAccepted || analyticsAccepted ? 'true' : 'false',
        );
        setSubmitted(true);
    };

    return (
        <div css={styles.wrapper}>
            <div>{cookieNotice.noticeText}</div>
            <div css={styles.toggleWrapper}>
                <div css={styles.toggleLabel}>&gt; {cookieNotice.requiredCookiesDescription}</div>
                <label css={styles.switch}>
                    <input css={styles.switchInput} type="checkbox" checked={true} disabled={true} />
                    <span css={[styles.slider, styles.sliderChecked]}></span>
                </label>
            </div>
            {cookieNotice.googleAnalyticsDescription && (
                <div css={styles.toggleWrapper}>
                    <div css={styles.toggleLabel}>&gt; {cookieNotice.googleAnalyticsDescription}</div>
                    <label css={styles.switch}>
                        <input
                            css={styles.switchInput}
                            type="checkbox"
                            checked={analyticsAccepted}
                            onChange={() => {
                                setAnalyticsAccepted(!analyticsAccepted);
                            }}
                        />
                        <span css={[styles.slider, analyticsAccepted ? styles.sliderChecked : '']}></span>
                    </label>
                </div>
            )}
            <div css={styles.buttonRow}>
                <Button
                    customCss={styles.button}
                    label={cookieNotice.readMore}
                    level="primary"
                    outlined={true}
                    onClick={() => {
                        window.open(`${window.location.protocol}//${window.location.host}/data-protection`);
                    }}
                />
                <span css={styles.buttonWrapper}>
                    <Button
                        customCss={styles.button}
                        label={cookieNotice.accept}
                        level="primary"
                        outlined={true}
                        onClick={() => {
                            submitSelection();
                        }}
                    />
                </span>
                <span css={styles.buttonWrapper}>
                    <Button
                        customCss={styles.button}
                        label={cookieNotice.acceptAll}
                        level="tertiary"
                        onClick={() => {
                            setAnalyticsAccepted(true);
                            submitSelection(true);
                        }}
                    />
                </span>
            </div>
        </div>
    );
};
