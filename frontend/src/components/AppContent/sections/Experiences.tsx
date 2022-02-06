import LanguageContext from 'services/context/Language/LanguageContext';
import { Subheading } from 'components/shared/SectionHeader/Subheading';
import { TimeStep } from 'components/shared/TimeStep';
import { useContext } from 'react';
import { SectionWrapper } from './SectionWrapper';

const Experiences = (): JSX.Element => {
    const { experiences } = useContext(LanguageContext).currentLanguageData.components;

    return (
        <SectionWrapper id="experiences-section" headline={`2 ${experiences.title}`}>
            <>
                <Subheading headline={`2.1 ${experiences.work.title}`} />
                {experiences.work.steps.map((step, index) => {
                    return (
                        <TimeStep
                            key={index}
                            flagText={step.period}
                            headline={step.headline}
                            subHeadline={step.position}
                        >
                            {step.paragraph}
                        </TimeStep>
                    );
                })}
                <Subheading headline={`2.2 ${experiences.education.title}`} />
                {experiences.education.steps.map((step, index) => {
                    return (
                        <TimeStep key={index} flagText={step.period} headline={step.headline} subHeadline={step.degree}>
                            {step.paragraph}
                        </TimeStep>
                    );
                })}
            </>
        </SectionWrapper>
    );
};

export default Experiences;
