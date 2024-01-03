import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import EducationItem from 'components/EducationItem';
import { Courses } from './educationPage.styled';

import { education } from 'data/education';

const EducationPage = () => {
  return (
    <>
      <Title title="Education" />
      <SubTitle title="Courses" />
      <Courses>
        {education.courses.map(props => (
          <li>
            <EducationItem key={props.studyField} {...props} />
          </li>
        ))}
      </Courses>
      <SubTitle title="Higher education institution" />
      <EducationItem {...education.university} />
    </>
  );
};

export default EducationPage;
