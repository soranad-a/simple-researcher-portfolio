/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PALETTE } from 'services/const/AppConstants';

const getStyles = () => {
    return {
        header: css`
            width: 100%;
            border-bottom: 2px solid ${PALETTE.light};
            padding: 5px 2px;
            font-size: 24px;
            text-transform: uppercase;
            margin-bottom: 20px;
        `,
    };
};

export const SectionHeader = ({ headline }: { headline: string }): JSX.Element => {
    const styles = getStyles();
    return <div css={styles.header}>{headline}</div>;
};
