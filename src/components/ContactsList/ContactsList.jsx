import { useContext } from 'react';

import { ThemeContext } from 'contexts/ThemeContext';
import { contacts } from 'data/aboutMe';

import {
  ContactListWrapper,
  ContactLink,
  IconWrapper,
} from './contactsList.styled';

const ContactsList = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ContactListWrapper current_theme={theme}>
      {contacts[0].map(({ info, Icon, link }) => (
        <li key={info}>
          <ContactLink current_theme={theme} target="_blank" to={link}>
            <IconWrapper>
              <Icon width={24} height={24} />
            </IconWrapper>
            <p>{info}</p>
          </ContactLink>
        </li>
      ))}
    </ContactListWrapper>
  );
};

export default ContactsList;
