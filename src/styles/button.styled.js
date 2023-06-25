import { css } from 'styled-components';

export const button = css`
  display: block;
  padding: 16px 32px;

  width: fit-content;

  font-family: ${({ theme }) => theme.fonts.main.medium};

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.dark};
`;
