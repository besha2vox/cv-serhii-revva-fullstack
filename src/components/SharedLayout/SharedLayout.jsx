import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ThemeContext } from 'contexts/ThemeContext';

import NavBar from 'components/NavBar';
import AboutMe from 'components/AboutMe';

import {
  SharedLayoutWrapper,
  Main,
  Section,
  Container,
} from './sharedLayout.styled';

const SharedLayout = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [menuClass, setMenuClass] = useState('');
  const [aboutMeClass, setAboutMeClass] = useState('');
  const { theme } = useContext(ThemeContext);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (pathname === '/') {
      setAboutMeClass('');
    } else {
      setAboutMeClass('hidden');
    }

    setMenuClass('');
  }, [pathname]);

  const toggleMenu = () => {
    setMenuClass(prevState => {
      if (!prevState) return 'active';
      return '';
    });

    if (menuClass === 'active') return;
    setAboutMeClass('hidden');
  };

  const toggleAboutMe = () => {
    setAboutMeClass(prevState => {
      if (!prevState) return 'hidden';
      return '';
    });

    if (aboutMeClass !== 'hidden') return;
    setMenuClass('');
  };

  return (
    <SharedLayoutWrapper current_theme={theme}>
      <AboutMe
        handleClick={toggleAboutMe}
        className={aboutMeClass}
        viewportWidth={viewportWidth}
      />
      <Main>
        <Section>
          <Container>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
      <NavBar
        handleClick={toggleMenu}
        className={menuClass}
        viewportWidth={viewportWidth}
      />
    </SharedLayoutWrapper>
  );
};

export default SharedLayout;
