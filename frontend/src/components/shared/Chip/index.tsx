/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PALETTE } from 'services/const/AppConstants';

const getStyles = () => {
    return {
        chip: css`
            padding: 2px 8px;
            border: 1px solid ${PALETTE.secondary};
            color: ${PALETTE.secondary};
            margin: 2px;
            display: inline-block;
        `,
    };
};

export const Chip = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const styles = getStyles();
    return <span css={styles.chip}>{children}</span>;
};
