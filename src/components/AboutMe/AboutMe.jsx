import { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from 'contexts/ThemeContext';

import Profile from 'components/Profile';
import ContactsList from 'components/ContactsList';
import SkillSetList from 'components/SkillSetList/SkillSetList';

import {
  AboutMeWrapper,
  HiddenAboutMeButton,
  ScrolledWrapper,
} from './aboutMe.styled';

const AboutMe = ({ className, viewportWidth, handleClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <AboutMeWrapper className={className} current_theme={theme}>
      {viewportWidth < 1279 && (
        <HiddenAboutMeButton onClick={handleClick} current_theme={theme} />
      )}
      <Profile handleClick={handleClick} isClicked={className === 'hidden'} />
      <ScrolledWrapper>
        <ContactsList />
        <SkillSetList />
      </ScrolledWrapper>
    </AboutMeWrapper>
  );
};

AboutMe.propTypes = {
  className: PropTypes.string.isRequired,
  viewportWidth: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default AboutMe;
