import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavAside = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  gap: 30px;
  margin-left: auto;

  min-width: 100px;
  max-width: fit-content;
  min-height: 100vh;

  background-color: ${({ theme, current_theme }) =>
    theme.colors.background.secondary[current_theme]};

  transition-property: background-color, transform;
  transition-duration: 500ms;
  transition-timing-function: ${({ theme }) => theme.transition};

  @media screen and (max-width: 1279px) {
    transform: translateX(100%);

    &.active {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 174px;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 30%;
  left: 0;
  padding: 2px 6px;

  transform: translateX(-40px) rotate(270deg);
  color: ${({ theme, current_theme }) =>
    theme.colors.text.primary[current_theme]};
  background-color: inherit;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const NavBarWrapper = styled.nav`
  width: 100px;
  height: 100vh;
`;

export const ThemeToggleButton = styled.button`
  position: relative;

  width: 30px;
  height: 30px;

  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.dark};
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;

  transition-property: color, box-shadow, border-color;
  transition-duration: 500ms;
  transition-timing-function: ${({ theme }) => theme.transition};

  overflow: hidden;
  cursor: pointer;

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-130%, -130%);
    fill: currentColor;
    transition: transform 300ms ${({ theme }) => theme.transition};
  }

  &.dark svg {
    transform: translate(-50%, -50%);
  }

  &.light {
    box-shadow: inset -5px -5px 1px 1px ${({ theme }) => theme.colors.light};
    border-color: ${({ theme }) => theme.colors.dark};
  }

  &.dark {
    border-color: ${({ theme }) => theme.colors.light};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &.light:hover {
    box-shadow: inset -5px -5px 1px 1px ${({ theme }) => theme.colors.accent};
  }
`;

export const Navigation = styled.nav`
  width: 100%;
`;

export const NavBarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 40px;
  }
`;

export const NavBarItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const NavBarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 10px;

  width: 100%;

  color: ${({ theme, current_theme }) =>
    theme.colors.text.primary[current_theme]};
  background-color: ${({ theme, current_theme }) =>
    theme.colors.background.primary[current_theme]};
  border-radius: 20px;

  transition-property: color, background-color;
  transition-duration: 300ms;
  transition-timing-function: ${({ theme }) => theme.transition};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.dark};
  }

  & svg {
    fill: currentColor;
  }
`;

export const NavBarText = styled.p`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    top: -10px;
    left: 50%;
    padding: 6px 15px;

    font-family: ${({ theme }) => theme.fonts.main.medium};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    text-align: center;

    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme, current_theme }) =>
      theme.colors.background.tertiary[current_theme]};
    border-radius: 4px;
    transform: translate(-50%, -100%);
    opacity: 0;
    pointer-events: none;
    transition: opacity;
    transition-duration: 300ms;
    transition-timing-function: ${({ theme }) => theme.transition};

    &::after {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 50%;

      width: 0;
      height: 0;

      transform: translate(-50%, 100%);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 10px solid
        ${({ theme, current_theme }) =>
          theme.colors.background.tertiary[current_theme]};
    }

    ${NavBarLink}:hover & {
      opacity: 1;
    }
  }
`;
