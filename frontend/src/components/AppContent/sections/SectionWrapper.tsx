/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SectionHeader } from 'components/shared/SectionHeader';

const getStyles = () => {
    return {
        wrapper: css`
            max-width: 800px;
            margin: 100px auto;
            padding: 100px 0;
            display: flex;
            justify-content: center;
            flex-direction: column;

            @media (max-width: 600px) {
                padding: 0 20px;
            }
        `,
    };
};

export const SectionWrapper = (props: {
    children: JSX.Element | JSX.Element[];
    headline: string;
    id?: string;
}): JSX.Element => {
    const styles = getStyles();
    return (
        <div css={styles.wrapper} id={props.id ? props.id : props.headline.replaceAll(' ', '-')}>
            <SectionHeader headline={props.headline} />
            {props.children}
        </div>
    );
};
