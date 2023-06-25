import styled, { keyframes } from 'styled-components';

const arrowAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }`;

export const AboutMeWrapper = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  gap: 40px;

  min-width: fit-content;
  min-height: 100vh;
  max-height: 100vh;

  background-color: ${({ theme, current_theme }) =>
    theme.colors.background.secondary[current_theme]};

  transition-property: background-color, transform;
  transition-duration: 300ms;
  transition-timing-function: ${({ theme }) => theme.transition};

  @media screen and (max-width: 1279px) {
    transform: translateX(0);

    &.hidden {
      min-width: fit-content;
      transform: translateX(-100%);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: relative;
  }
`;

export const HiddenAboutMeButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 50px;
  right: 10px;
  display: flex;
  gap: 4px;
  padding: 4px 8px;

  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: 1;
  text-transform: uppercase;

  color: ${({ theme, current_theme }) =>
    theme.colors.text.primary[current_theme]};
  border: 1px solid currentColor;
  border-radius: 10px;
  opacity: 0.4;

  transition-property: opacity, color;
  transition-duration: 300ms;
  transition-timing-function: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    opacity: 0.7;
  }

  &::before {
    content: '';
    border-right: 8px solid currentColor;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }

  &:hover::before {
    animation-name: ${arrowAnimation};
    animation-duration: 500ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

export const ScrolledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;

  overflow-y: auto;
`;
