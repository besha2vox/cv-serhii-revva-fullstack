import styled, { css } from 'styled-components';

export const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100svh;
  background-color: ${({ theme, current_theme }) =>
    theme.colors.background.tertiary[current_theme]}90;
`;

export const ModalWindow = styled.div`
  position: relative;
  padding: 30px;
  max-width: 80vh;
  max-height: 80vh;
  background-color: ${({ theme, current_theme }) =>
    theme.colors.background.secondary[current_theme]};
`;

const line = css`
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: currentColor;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  width: 24px;
  height: 24px;
  color: ${({ theme, current_theme }) =>
    theme.colors.text.secondary[current_theme]};
  transition: color 300ms ${({ theme }) => theme.transition};
  overflow: hidden;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &::before {
    ${line}
    transform: rotate(45deg);
  }

  &::after {
    ${line}
    transform: rotate(-45deg);
  }
`;
