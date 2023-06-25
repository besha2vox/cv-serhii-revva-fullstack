import styled from 'styled-components';

import { AboutMeWrapper } from 'components/AboutMe/aboutMe.styled';

export const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 0 40px;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  border-radius: 50%;

  box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent};
  overflow: hidden;

  transition-property: transform, box-shadow;
  transition-duration: 300ms;
  transition-timing-function: ${({ theme }) => theme.transition};

  @media screen and (max-width: 1279px) {
    ${AboutMeWrapper}.hidden & {
      transform: translate(100%, calc(-100% + 100px)) scale(0.2);
      cursor: pointer;
    }

    ${AboutMeWrapper}.hidden &:hover {
      box-shadow: 5px 5px 20px ${({ theme }) => theme.colors.accent},
        -5px -5px 20px ${({ theme }) => theme.colors.accent},
        -5px 5px 20px ${({ theme }) => theme.colors.accent},
        5px -5px 20px ${({ theme }) => theme.colors.accent};
    }
  }
`;
