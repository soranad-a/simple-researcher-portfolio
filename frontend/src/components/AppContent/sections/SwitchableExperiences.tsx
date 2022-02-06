/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LanguageContext from 'services/context/Language/LanguageContext';
import { SwitchButton } from 'components/shared/SwitchButton';
import { TimeStep } from 'components/shared/TimeStep';
import { useContext, useState } from 'react';
import { LanguageData } from 'services/const/LanguageData';
import { SectionWrapper } from './SectionWrapper';

const getStyles = () => {
    return {
        marginBelow: css`
            margin-bottom: 16px;
        `,
    };
};

const getCorrectExperiences = (index: number, languageData: LanguageData): JSX.Element => {
    switch (index) {
        case 0:
            const workContent = languageData.components.experiences.work.steps.map((step, index) => {
                return (
                    <TimeStep key={index} flagText={step.period} headline={step.headline} subHeadline={step.position}>
                        {step.paragraph}
                    </TimeStep>
                );
            });
            return <div>{workContent}</div>;
        case 1:
            const educationContent = languageData.components.experiences.education.steps.map((step, index) => {
                return (
                    <TimeStep key={index} flagText={step.period} headline={step.headline} subHeadline={step.degree}>
                        {step.paragraph}
                    </TimeStep>
                );
            });
            return <div>{educationContent}</div>;
        default:
            return <></>;
    }
};

const SwitchableExperiences = (): JSX.Element => {
    const styles = getStyles();
    const [selected, setSelected] = useState<number>(0);
    const languageData = useContext(LanguageContext).currentLanguageData;
    const visibleExperiences: JSX.Element = getCorrectExperiences(selected, languageData);

    return (
        <SectionWrapper id="experiences-section" headline={`2. ${languageData.components.experiences.title}`}>
            <>
                <SwitchButton
                    labels={[
                        languageData.components.experiences.work.title,
                        languageData.components.experiences.education.title,
                    ]}
                    level="tertiary"
                    onChange={(index) => setSelected(index)}
                    defaultSelection={0}
                />
                <div css={styles.marginBelow}></div>
                {visibleExperiences}
            </>
        </SectionWrapper>
    );
};

export default SwitchableExperiences;
