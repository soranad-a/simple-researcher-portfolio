/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { Level } from 'services/const/AppConstants';
import { buttonStyles } from 'components/shared/Button';

type ButtonProps = {
    labels: string[];
    level: Level;
    onChange: (id: number) => void;
    disabled?: boolean;
    defaultSelection?: number;
};

const getStyles = (level: Level) => {
    return {
        wrapper: css`
            display: flex;
            justify-content: center;
        `,
        button: css`
            padding: 5px 20px;
            margin: 0px -0.5px;
            border-radius: 0px;
            border-color: ${buttonStyles[level].backgroundColor};
            border-width: 1px;
            color: ${buttonStyles[level].backgroundColor};
            text-transform: uppercase;
            background-color: rgba(0, 0, 0, 0);
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            &:hover {
                filter: brightness(1.15);
            }
            &:active {
                filter: brightness(1.5);
            }
        `,
        focusedButton: css`
            background-color: ${buttonStyles[level].backgroundColor};
            color: ${buttonStyles[level].color};
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(1, 1, 1, 0.15));
        `,
        firstButton: css`
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        `,
        lastButton: css`
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        `,
        disabled: css`
            opacity: 0.8;
        `,
    };
};

export const SwitchButton = ({
    labels,
    level,
    onChange,
    disabled = false,
    defaultSelection = 0,
}: ButtonProps): JSX.Element => {
    const styles = getStyles(level);
    const [selected, setSelected] = useState<number>(defaultSelection);

    const buttons = labels.map((value, index) => {
        return (
            <button
                key={index}
                onClick={() => {
                    onChange(index);
                    setSelected(index);
                }}
                disabled={disabled}
                css={css`
                    ${styles.button};
                    ${disabled ? styles.disabled : ''};
                    ${index == 0 ? styles.firstButton : ''};
                    ${index == labels.length - 1 ? styles.lastButton : ''};
                    ${index == selected ? styles.focusedButton : ''};
                `}
            >
                {value}
            </button>
        );
    });

    return <div css={styles.wrapper}>{buttons}</div>;
};
