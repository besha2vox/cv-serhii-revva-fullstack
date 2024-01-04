import styled from 'styled-components';

export const ProjectCard = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 20px;
`;

export const InfoWrapper = styled.div`
  display: inherit;
  flex-direction: inherit;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const Info = styled.div`
  display: inherit;
  flex-direction: column;
  row-gap: 4px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: calc((100% - 20px) / 2);
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 10px;

  & ul {
    display: inherit;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const Link = styled.a`
  text-decoration: underline;
  font-style: italic;
`;
