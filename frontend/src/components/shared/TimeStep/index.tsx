/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ChevronDownIcon, ChevronUpIcon } from '@primer/octicons-react';
import { useState } from 'react';
import { PALETTE } from 'services/const/AppConstants';

const getStyles = () => {
    return {
        wrapper: css`
            display: grid;
            grid-template-columns: auto 1fr;
        `,
        flag: css`
            position: relative;
            width: 120px;
            height: 30px;
            font-size: 12px;
            line-height: 29px;
            background-color: ${PALETTE.secondary};
            &:before {
                content: '';
                position: absolute;
                height: 0;
                width: 0;
                top: 0px;
                left: 120px;
                border-top: 15px solid transparent;
                border-left: 15px solid ${PALETTE.secondary};
                border-bottom: 15px solid transparent;
            }
            &:after {
                content: '';
                position: absolute;
                height: 9px;
                width: 9px;
                top: 11px;
                left: 140px;
                border-radius: 10px;
                background-color: ${PALETTE.secondary};
            }
        `,
        cvStep: css`
            border-left: 1px solid ${PALETTE.secondary};
            margin-left: 24px;
            padding-left: 10px;
            padding-bottom: 30px;
        `,
        cvStepHeadline: css`
            text-transform: uppercase;
            font-size: 18px;
        `,
        cvStepSubHeadline: css`
            font-size: 16px;
        `,
        headlineWithIcon: css`
            display: flex;
            justify-content: space-between;
            align-items: center;
        `,
        icon: css`
            cursor: pointer;
            color: ${PALETTE.light};
        `,
        flagContent: css`
            margin-left: 5px;
        `,
        stepWrapper: css`
            background-color: ${PALETTE.secondary + 30};
            padding: 10px;
            border-radius: 3px;
        `,
        childrenWrapper: css`
            margin-top: 10px;
        `,
    };
};

export const TimeStep = ({
    flagText,
    headline,
    children,
    subHeadline,
}: {
    flagText: string;
    headline: string;
    children: React.ReactNode;
    subHeadline?: string;
}): JSX.Element => {
    const styles = getStyles();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div css={styles.wrapper}>
            <div css={styles.flag}>
                <span css={styles.flagContent}>{flagText}</span>
            </div>
            <div css={styles.cvStep}>
                <div css={styles.stepWrapper}>
                    <div css={styles.headlineWithIcon}>
                        <div>
                            <div css={styles.cvStepHeadline}>{headline}</div>
                            {subHeadline && <div css={styles.cvStepSubHeadline}>{subHeadline}</div>}
                        </div>
                        <a
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                            css={styles.icon}
                        >
                            {isOpen ? <ChevronDownIcon size={32} /> : <ChevronUpIcon size={32} />}
                        </a>
                    </div>
                    {isOpen && <div css={styles.childrenWrapper}>{children}</div>}
                </div>
            </div>
        </div>
    );
};
