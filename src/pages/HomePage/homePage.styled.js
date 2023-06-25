import styled from 'styled-components';

import { button } from 'styles/button.styled';

export const HomeTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[8]};
  color: ${({ theme, current_theme }) =>
    theme.colors.text.secondary[current_theme]};
  transition: color 300ms ${({ theme }) => theme.transition};

  & .accent {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Summary = styled.p``;

export const DownloadButton = styled.a`
  ${button}
`;
