import styled from 'styled-components';

export const SharedLayoutWrapper = styled.div`
  display: flex;
  height: 100vh;

  font-size: ${({ theme }) => theme.fontSizes[4]};

  color: ${({ theme, current_theme }) =>
    theme.colors.text.primary[current_theme]};
  background-color: ${({ theme, current_theme }) =>
    theme.colors.background.primary[current_theme]};

  transition-property: background-color, color;
  transition-duration: 500ms;
  transition-timing-function: ${({ theme }) => theme.transition};
  overflow: hidden;
`;

export const Main = styled.main`
  width: 100%;
  max-height: 100vh;

  overflow-y: auto;
`;

export const Section = styled.section`
  padding: 35px 0;
  width: 100%;
`;

export const Container = styled.div`
  padding: 0 30px;
  width: 100%;
`;
