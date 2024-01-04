import styled from 'styled-components';

export const Button = styled.button`
  display: inherit;

  text-align: center;
  overflow: hidden;
`;

export const ImgWrapper = styled.div`
  position: relative;
  height: 178px;
  overflow: hidden;
`;

export const Description = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px;

  height: 100%;
  text-align: start;
  background-color: ${({ theme }) => theme.colors.accent};
  transform: translateY(100%);
  transition: transform 300ms ease-in-out;
  opacity: 0.9;
  overflow-y: scroll;

  ${Button}:hover & {
    transform: translateY(0);
  }
`;
