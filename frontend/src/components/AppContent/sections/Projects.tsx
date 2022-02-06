import LanguageContext from 'services/context/Language/LanguageContext';
import { ProjectListItem } from 'components/shared/ProjectListItem';
import { SwitchButton } from 'components/shared/SwitchButton';
import { useContext, useState } from 'react';
import { LanguageData } from 'services/const/LanguageData';
import { SectionWrapper } from './SectionWrapper';

const getCorrectDetails = (index: number, languageData: LanguageData): JSX.Element => {
    const steps = languageData.components.projects.sections[index].steps.map((step, index) => (
        <ProjectListItem
            key={index}
            description={step.content}
            headline={step.headline}
            icon={step.icon}
            iconText={step.iconText}
            links={step.links}
            tags={step.tags}
        />
    ));
    return <div>{steps}</div>;
};

const Projects = (): JSX.Element => {
    const [selected, setSelected] = useState<number>(0);
    const languageData = useContext(LanguageContext).currentLanguageData;

    const visibleDetails: JSX.Element = getCorrectDetails(selected, languageData);

    return (
        <SectionWrapper id="projects-section" headline={`3 ${languageData.components.projects.title}`}>
            <>
                {' '}
                {languageData.components.projects.sections.length > 1 && (
                    <SwitchButton
                        labels={languageData.components.projects.sections.map((section) => section.title)}
                        level="tertiary"
                        onChange={(index) => setSelected(index)}
                        defaultSelection={0}
                    />
                )}
                {visibleDetails}
            </>
        </SectionWrapper>
    );
};

export default Projects;
