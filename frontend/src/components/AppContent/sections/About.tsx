/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LanguageContext from 'services/context/Language/LanguageContext';
import { Chip } from 'components/shared/Chip';
import { useContext } from 'react';
import { PALETTE, PERSONAL_DATA } from 'services/const/AppConstants';
import { SectionWrapper } from './SectionWrapper';

const getStyles = () => {
    return {
        content: css`
            display: flex;

            @media (max-width: 600px) {
                display: block;
            }
        `,
        img: css`
            max-width: 100%;
        `,
        imgWrapper: css`
            flex-basis: 0;
            flex-grow: 1;
        `,
        rightContent: css`
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: ${PALETTE.secondary + '30'};
            border-radius: 3px;
            padding: 10px;
            flex-grow: 2;
            flex-basis: 0;
            @media (max-width: 600px) {
                margin: 0;
                display: block;
            }
        `,
        cell: css`
            padding: 5px;
            font-family: 'Roboto Mono';
            font-size: 14px;
        `,
        smallCell: css`
            @media (max-width: 600px) {
                width: 10px;
            }
        `,
        bigCell: css`
            @media (max-width: 600px) {
                width: 50%;
            }
        `,
        table: css`
            @media (max-width: 600px) {
                width: 100%;
                overflow-wrap: break-word;
            }
        `,
    };
};

const About = (): JSX.Element => {
    const { about } = useContext(LanguageContext).currentLanguageData.components;
    const styles = getStyles();

    return (
        <SectionWrapper id="about-section" headline={`1. ${about.title}`}>
            <div css={styles.content}>
                <div css={styles.imgWrapper}>
                    <img src="/profile_img.jpg" css={styles.img} />
                </div>
                <div css={styles.rightContent}>
                    <p>{about.aboutParagraph}</p>
                    <table css={styles.table}>
                        <tbody>
                            <tr>
                                <td
                                    css={`
                                        ${styles.cell} ${styles.smallCell}
                                    `}
                                >
                                    &gt;
                                </td>
                                <td css={styles.cell}>{about.birth}</td>
                                <td
                                    css={`
                                        ${styles.cell}
                                    `}
                                >
                                    =
                                </td>
                                <td
                                    css={`
                                        ${styles.cell} ${styles.bigCell}
                                    `}
                                >
                                    &apos;{PERSONAL_DATA.birthDate}&apos;
                                </td>
                            </tr>
                            <tr>
                                <td
                                    css={`
                                        ${styles.cell} ${styles.smallCell}
                                    `}
                                >
                                    &gt;
                                </td>
                                <td css={styles.cell}>{about.languages}</td>
                                <td
                                    css={`
                                        ${styles.cell}
                                    `}
                                >
                                    =
                                </td>
                                <td
                                    css={`
                                        ${styles.cell} ${styles.bigCell}
                                    `}
                                >
                                    [{PERSONAL_DATA.languages.map((language) => `'${language}'`).join(',')}]
                                </td>
                            </tr>
                            <tr>
                                <td
                                    css={`
                                        ${styles.cell} ${styles.smallCell}
                                    `}
                                >
                                    &gt;
                                </td>
                                <td css={styles.cell}>{about.leisure}</td>
                                <td
                                    css={`
                                        ${styles.cell}
                                    `}
                                >
                                    =
                                </td>
                                <td
                                    css={`
                                        ${styles.cell} ${styles.bigCell}
                                    `}
                                >
                                    [{PERSONAL_DATA.leisures.map((leisure) => `'${leisure}'`).join(',')}]
                                </td>
                            </tr>
                            <tr>
                                <td
                                    css={`
                                        ${styles.cell} ${styles.smallCell}
                                    `}
                                >
                                    &gt;
                                </td>
                                <td css={styles.cell}>{about.programming}</td>
                                <td
                                    css={`
                                        ${styles.cell}
                                    `}
                                >
                                    =
                                </td>
                                <td
                                    css={`
                                        ${styles.cell} ${styles.bigCell}
                                    `}
                                >
                                    {PERSONAL_DATA.programming.map((programmingLanguage, index) => (
                                        <Chip key={index}>{programmingLanguage}</Chip>
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    css={`
                                        ${styles.cell} ${styles.smallCell}
                                    `}
                                >
                                    &gt;
                                </td>
                                <td css={styles.cell}>{about.libraries}</td>
                                <td
                                    css={`
                                        ${styles.cell}
                                    `}
                                >
                                    =
                                </td>
                                <td
                                    css={`
                                        ${styles.cell} ${styles.bigCell}
                                    `}
                                >
                                    {PERSONAL_DATA.libraries.map((library, index) => (
                                        <Chip key={index}>{library}</Chip>
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
