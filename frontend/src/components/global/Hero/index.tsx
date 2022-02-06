/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PALETTE } from 'services/const/AppConstants';

const getStyles = () => {
    return {
        separator: css`
            border-top: 1px solid ${PALETTE.light};
            padding: 5px 50px;

            @media (max-width: 600px) {
                margin: 0 20px;
            }
        `,
        heading: css`
            font-weight: 600;
            font-size: 32px;
            text-transform: uppercase;
        `,
        subheading: css`
            font-weight: 100;
            font-size: 24px;
        `,
        root: css`
            max-width: 100%;
        `,
    };
};

type HeroProps = {
    heading: string;
    subheading: string;
};

export const Hero = ({ heading, subheading }: HeroProps): JSX.Element => {
    const styles = getStyles();
    return (
        <>
            <div css={styles.root}>
                <h1 css={styles.heading}>{heading}</h1>
                <div css={styles.separator}>
                    <h2 css={styles.subheading}>{subheading}</h2>
                </div>
            </div>
        </>
    );
};
