import { Global } from '@emotion/react';
import { PALETTE } from 'services/const/AppConstants';

const getGlobalStyles = () => {
    return {
        body: {
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: PALETTE.primary,
            color: PALETTE.light,
            margin: 0,
            'overflow-x': 'hidden',
            width: '100%',
        },
        html: {
            'overflow-x': 'hidden',
            width: '100%',
        },
        code: {
            fontFamily: 'Roboto Mono, monospace',
        },
        p: {
            lineHeight: '22px',
        },
        a: {
            color: PALETTE.secondary,
        },
        img: {
            zIndex: 10,
        },
        div: {
            zIndex: 10,
        },
        span: {
            zIndex: 10,
        },
    };
};

export const AppStyle = (): JSX.Element => {
    return <Global styles={getGlobalStyles()} />;
};
