import { useContext } from 'react';

import { ThemeContext } from 'contexts/ThemeContext';
import cv from 'assets/files/cv.pdf';

import { HomeTitle, Summary, DownloadButton } from './homePage.styled';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <HomeTitle current_theme={theme}>
        I’m Serhii Revva <span className="accent">Full-Stack</span> Developer
      </HomeTitle>
      <Summary>
        I'm an enthusiastic and detail-oriented Frontend developer seeking an
        entry-level position with Company to use my skills in coding,
        troubleshooting complex problems. I have good knowledge of HTML, CSS,
        JavaScript, React.js and Node.js. Also have experience in applying the
        Agile / Scrum methodology when working in a team. I love new challenges
        that make me want to learn more technology and improve my skills every
        day. My goal is to excel in challenging and innovative work and strive
        to reach my full potential. I am a fast learner, responsible, and ready
        for challenging tasks.
      </Summary>
      <DownloadButton href={cv} download="CV Revva Serhii Full-Stack dev">
        Download my CV
      </DownloadButton>
    </>
  );
};

export default HomePage;
