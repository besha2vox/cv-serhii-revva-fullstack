import styled from 'styled-components';

export const SubTitleStyled = styled.h2`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-size: ${({ theme }) => theme.fontSizes[6]};

  color: ${({ theme, current_theme }) =>
    theme.colors.text.secondary[current_theme]};
`;
