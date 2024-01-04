import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const Item = styled.li`
  display: inherit;
  align-items: center;
  column-gap: 10px;
  flex-basis: 100%;
  & a {
    min-width: 100px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-basis: calc((100% - 20px) / 2);
  }
`;
