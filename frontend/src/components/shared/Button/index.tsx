/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import { MouseEvent } from 'react';
import { Level, PALETTE } from 'services/const/AppConstants';

type ButtonProps = {
    label: string;
    level: Level;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    outlined?: boolean;
    disabled?: boolean;
    customCss?: SerializedStyles;
};

export const buttonStyles: {
    [key in Level]: { backgroundColor: string; backgroundColorHover: string; color: string };
} = {
    primary: {
        backgroundColor: PALETTE.primary,
        backgroundColorHover: 'rgba(0,0,0,0.75)',
        color: PALETTE.light,
    },
    secondary: {
        backgroundColor: PALETTE.secondary,
        backgroundColorHover: 'rgba(0,0,0,0.5)',
        color: PALETTE.light,
    },
    tertiary: {
        backgroundColor: PALETTE.tertiary,
        backgroundColorHover: 'rgba(0,0,0,0.25)',
        color: PALETTE.primary,
    },
    light: {
        backgroundColor: PALETTE.light,
        backgroundColorHover: 'rgba(0,0,0,0.1)',
        color: PALETTE.primary,
    },
};

const getStyles = (level: Level, outlined: boolean) => {
    const buttonStyle = css`
        padding: 5px 20px;
        border-radius: 3px;
        border-color: ${outlined ? buttonStyles[level].backgroundColor : 'none'};
        border-width: ${outlined ? '1px' : '0px'};
        color: ${outlined ? buttonStyles[level].backgroundColor : buttonStyles[level].color};
        background-color: ${outlined ? 'rgba(0, 0, 0, 0)' : buttonStyles[level].backgroundColor};
        text-transform: uppercase;

        @media (max-width: 600px) {
            padding: 10px 25px;
        }
    `;
    return {
        buttonRoot: buttonStyle,
        buttonActive: css`
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            &:hover {
                filter: brightness(1.15);
            }
            &:active {
                filter: brightness(1.5);
            }
        `,

        disabled: css`
            opacity: 0.5;
        `,

        filled: css`
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(1, 1, 1, 0.15));
        `,
    };
};

export const Button = ({
    label,
    level,
    onClick,
    outlined = false,
    disabled = false,
    customCss = undefined,
}: ButtonProps): JSX.Element => {
    const styles = getStyles(level, outlined);
    return (
        <button
            css={[
                styles.buttonRoot,
                disabled ? styles.disabled : styles.buttonActive,
                outlined ? '' : styles.filled,
                customCss ? customCss : '',
            ]}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
