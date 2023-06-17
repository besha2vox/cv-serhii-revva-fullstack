import { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from 'contexts/ThemeContext';

import SubTitle from 'components/SubTitle/SubTitle';
import SkilList from 'components/SkilList';

import { SkillSetItemWrapper, SkillsButton } from './skillSetItem.styled';

const SkillSetItem = ({ title, list }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleToggleDropDown = () => {
    setIsDropDownOpen(prevState => !prevState);
  };

  return (
    <SkillSetItemWrapper current_theme={theme} key={title}>
      <SkillsButton
        onClick={handleToggleDropDown}
        className={isDropDownOpen ? 'active' : ''}
        current_theme={theme}
      >
        <SubTitle title={title} />
      </SkillsButton>
      {<SkilList isOpen={isDropDownOpen} list={list} />}
    </SkillSetItemWrapper>
  );
};

SkillSetItem.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillSetItem;
