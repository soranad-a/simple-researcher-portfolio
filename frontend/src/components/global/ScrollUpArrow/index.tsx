/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ArrowUpIcon } from '@primer/octicons-react';
import { useEffect, useState } from 'react';
import { PALETTE } from 'services/const/AppConstants';
import { scrollToElementWithId } from 'components/AppContent/sections/Landing';

const getStyles = () => {
    return {
        upIcon: css`
            position: fixed;
            bottom: 10px;
            right: 10px;
            z-index: 20;
            border: 1px solid ${PALETTE.light};
            border-radius: 50%;
            opacity: 0;
            cursor: pointer;
            transition-duration: 0.25s;
        `,
    };
};

export const ScrollUpArrow = (): JSX.Element => {
    const styles = getStyles();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (document.documentElement.scrollTop == 0) {
                setVisible(false);
            } else if (!visible) {
                setVisible(true);
            }
        };
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    });

    return (
        <div
            css={css`
                ${styles.upIcon};
                ${visible ? 'cursor: pointer; opacity: 0.5; &:hover { opacity: 1; }' : ''}
            `}
            onClick={() => scrollToElementWithId('landing-section')}
        >
            <ArrowUpIcon size="medium" />
        </div>
    );
};
