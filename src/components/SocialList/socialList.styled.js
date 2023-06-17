import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SocialListWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;

export const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.dark};

  transition-property: color, transform;
  transition-duration: 300ms;
  transition-timing-function: ${({ theme }) => theme.transition};

  & svg {
    fill: currentColor;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
