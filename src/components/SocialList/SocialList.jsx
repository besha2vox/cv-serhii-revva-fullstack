import { useContext } from 'react';

import { ThemeContext } from 'contexts/ThemeContext';
import { contacts } from 'data/aboutMe';

import { SocialListWrapper, SocialLink } from './socialList.styled';

const SocialList = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SocialListWrapper current_theme={theme}>
      {contacts[1].map(({ info, Icon, link }) => (
        <li key={info}>
          <SocialLink target="_blank" to={link}>
            <Icon width={24} height={24} />
          </SocialLink>
        </li>
      ))}
    </SocialListWrapper>
  );
};

export default SocialList;
