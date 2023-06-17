import { skills } from 'data/info';

import SkillSetItem from 'components/SkillSetItem';

import { SkillSetListWrapper } from './skillSetList.styled';

const SkillSetList = () => {
  return (
    <SkillSetListWrapper>
      {skills.map(({ title, list }) => (
        <SkillSetItem key={title} title={title} list={list} />
      ))}
    </SkillSetListWrapper>
  );
};

export default SkillSetList;
