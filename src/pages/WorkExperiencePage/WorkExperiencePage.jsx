import Title from 'components/Title';
import WorkExperienceItem from 'components/WorkExperienceItem';

import { workExperience } from 'data/workExperience';
import { ExperienceList } from './workExperiencePage.styled';

const WorkExperiencePage = () => {
  return (
    <>
      <Title title="Work Experience" />
      <ExperienceList>
        {workExperience.map((props, i) => (
          <li key={i}>
            <WorkExperienceItem {...props} />
          </li>
        ))}
      </ExperienceList>
    </>
  );
};

export default WorkExperiencePage;
