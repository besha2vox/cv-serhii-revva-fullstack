import { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from 'contexts/ThemeContext';
import { aboutMe } from 'data/info';

import SocialList from 'components/SocialList';
import SubTitle from 'components/SubTitle';

import { ProfileWrapper, PhotoWrapper } from './profile.styled';

const Profile = ({ handleClick, isClicked }) => {
  const { theme } = useContext(ThemeContext);
  const onCliclProps = isClicked ? { onClick: handleClick } : {};

  return (
    <ProfileWrapper current_theme={theme}>
      <PhotoWrapper {...onCliclProps}>
        <img width="200" src={aboutMe.photo} alt={aboutMe.name} />
      </PhotoWrapper>
      <SubTitle title={aboutMe.name} />
      <p>{aboutMe.role}</p>
      <SocialList />
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Profile;
