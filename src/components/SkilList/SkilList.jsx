import PropTypes from 'prop-types';
import { useContext } from 'react';

import { ThemeContext } from 'contexts/ThemeContext';

import { SkillListWrapper, SkillItem } from './skillList.styled';

const SkilList = ({ list, isOpen }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SkillListWrapper className={isOpen ? '' : 'hidden'} current_theme={theme}>
      {list.map(skill => (
        <SkillItem current_theme={theme} key={skill}>
          <p>{skill}</p>
        </SkillItem>
      ))}
    </SkillListWrapper>
  );
};

SkilList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SkilList;
