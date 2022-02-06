/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const getStyles = () => {
    return {
        header: css`
            font-size: 20px;
            margin-bottom: 20px;
        `,
    };
};

export const Subheading = ({ headline }: { headline: string }): JSX.Element => {
    const styles = getStyles();
    return <div css={styles.header}>{headline}</div>;
};
