import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { after } from 'styles/after.styled';

export const ContactListWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 40px;

  ${after};
`;

export const ContactLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;

  text-align: end;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.accent}00 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  background-size: 0 100%;
  background-position: 0 95%;
  background-repeat: no-repeat;

  transition-property: background-size, color;
  transition-duration: 300ms;
  transition-timing-function: ${({ theme }) => theme.transition};

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  &:hover {
    color: ${({ theme, current_theme }) =>
      theme.colors.text.secondary[current_theme]};
    background-size: 100% 100%;
  }
`;

export const IconWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;

  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.dark};

  transition-property: color, transform;
  transition-duration: 300ms;
  transition-timing-function: ${({ theme }) => theme.transition};

  & svg {
    fill: currentColor;
  }
`;
