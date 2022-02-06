/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ArrowDownIcon } from '@primer/octicons-react';
import { Hero } from 'components/global/Hero';
import LanguageContext from 'services/context/Language/LanguageContext';
import { Button } from 'components/shared/Button';
import { useContext, useEffect, useState } from 'react';
import { PALETTE } from 'services/const/AppConstants';

const getStyles = () => {
    return {
        wrapper: css`
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
        `,
        buttonRow: css`
            margin-top: 50px;
        `,
        button: css`
            margin: 5px;
        `,
        arrowWrapper: css`
            position: absolute;
            bottom: 10px;
        `,
        downIcon: css`
            border: 1px solid ${PALETTE.light};
            border-radius: 50%;
            opacity: 0.5;
            cursor: pointer;
            transition-duration: 0.25s;
            &:hover {
                opacity: 1;
            }
        `,
    };
};

export const scrollToElementWithId = (id: string): void => {
    const target = document.getElementById(id);
    window.scrollTo({
        top: target?.offsetTop,
        behavior: 'smooth',
    });
};

export const Landing = (): JSX.Element => {
    const [arrowVisible, setArrowVisible] = useState(true);
    const styles = getStyles();
    const { components } = useContext(LanguageContext).currentLanguageData;

    useEffect(() => {
        const scrollListener = () => {
            if (document.documentElement.scrollTop == 0) {
                setArrowVisible(true);
            } else if (arrowVisible) {
                setArrowVisible(false);
            }
        };
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    });

    return (
        <div css={styles.wrapper} id="landing-section">
            <Hero heading={components.hero.heading} subheading={components.hero.subHeading} />
            <div css={styles.buttonRow}>
                <span css={styles.button}>
                    <Button
                        label={components.about.title}
                        level="tertiary"
                        outlined={true}
                        onClick={() => scrollToElementWithId('about-section')}
                    />
                </span>
                <span css={styles.button}>
                    <Button
                        label={components.landing.getInTouch}
                        level="tertiary"
                        onClick={() => scrollToElementWithId('contact-section')}
                    />
                </span>
            </div>
            <div css={styles.arrowWrapper} onClick={() => scrollToElementWithId('about-section')}>
                <ArrowDownIcon
                    size="medium"
                    css={css`
                        ${styles.downIcon};
                        opacity: ${arrowVisible ? 0.5 : 0};
                    `}
                />
            </div>
        </div>
    );
};
