import { css } from 'styled-components';

export const after = css`
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;

    width: 100%;
    height: 2px;

    border-radius: 30%;
    background-color: ${({ theme, current_theme }) =>
      theme.colors.text.primary[current_theme]};
    opacity: 0.5;
  }
`;
