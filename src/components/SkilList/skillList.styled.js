import styled from 'styled-components';

export const SkillListWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 4px;

  max-height: 100vh;

  transition: max-height 500ms ${({ theme }) => theme.transition};
  overflow: hidden;

  &.hidden {
    max-height: 0;
  }
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: '';

    border-left: 5px solid
      ${({ theme, current_theme }) => theme.colors.text.primary[current_theme]};
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
`;
