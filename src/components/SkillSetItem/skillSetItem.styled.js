import styled from 'styled-components';
import { after } from 'styles/after.styled';

export const SkillSetItemWrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;

  &:not(:last-child) {
    ${after};
  }
`;

export const SkillsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;

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

  &:hover {
    color: ${({ theme, current_theme }) =>
      theme.colors.text.secondary[current_theme]};
    background-size: 100% 100%;
  }

  &::after {
    content: '';

    border-top: 8px solid
      ${({ theme, current_theme }) =>
        theme.colors.text.secondary[current_theme]};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;

    transition-property: transform;
    transition-duration: 300ms;
    transition-timing-function: ${({ theme }) => theme.transition};
  }

  &.active::after {
    content: '';
    transform: rotateX(180deg);
  }
`;
