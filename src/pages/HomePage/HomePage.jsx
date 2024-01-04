import { useContext } from 'react';

import { ThemeContext } from 'contexts/ThemeContext';
import { aboutMe } from 'data/aboutMe';

import SubTitle from 'components/SubTitle';
import CertificationsList from 'components/CertificationsItem/CertificationsList';
import { HomeTitle, Summary, DownloadButton } from './homePage.styled';

const { fullName, role, summary, cv } = aboutMe;

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <HomeTitle current_theme={theme}>
        I’m {fullName} <span className="accent">{role}</span>
      </HomeTitle>
      <Summary>
        {summary.split('\n').map(s => (
          <p>{s}</p>
        ))}
      </Summary>
      <DownloadButton href={cv} download="CV Revva Serhii Full-Stack dev">
        Download my CV
      </DownloadButton>

      <SubTitle title="Certifications" />
      <CertificationsList />
    </>
  );
};

export default HomePage;
