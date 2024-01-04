import PropTypes from 'prop-types';

import { aboutMe } from 'data/aboutMe';

import SocialList from 'components/SocialList';
import SubTitle from 'components/SubTitle';

import { ProfileWrapper, PhotoWrapper } from './profile.styled';

const Profile = ({ handleClick, isClicked }) => {
  const onCliclProps = isClicked ? { onClick: handleClick } : {};

  return (
    <ProfileWrapper>
      <PhotoWrapper {...onCliclProps}>
        <img width="200" src={aboutMe.photo} alt={aboutMe.fullName} />
      </PhotoWrapper>
      <SubTitle title={aboutMe.fullName} />
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
