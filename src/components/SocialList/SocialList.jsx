import { contacts } from 'data/info';

import { SocialListWrapper, SocialLink } from './socialList.styled';

const SocialList = () => {
  return (
    <SocialListWrapper>
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
