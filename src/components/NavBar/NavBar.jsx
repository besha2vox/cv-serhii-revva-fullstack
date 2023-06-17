import { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from 'contexts/ThemeContext';

import { ReactComponent as HomeIcon } from 'assets/images/icons/home.svg';
import { ReactComponent as EducationIcon } from 'assets/images/icons/education.svg';
import { ReactComponent as WorkIcon } from 'assets/images/icons/work.svg';
import { ReactComponent as PortfolioIcon } from 'assets/images/icons/portfolio.svg';
import { ReactComponent as SunIcon } from 'assets/images/icons/sun.svg';

import {
  NavAside,
  ToggleButton,
  ThemeToggleButton,
  Navigation,
  NavBarList,
  NavBarItem,
  NavBarLink,
  NavBarText,
} from './navBar.styled';

const navBarIcons = [
  { name: 'Home', Icon: HomeIcon, path: '/' },
  { name: 'Education', Icon: EducationIcon, path: '/education' },
  { name: 'Work Experience', Icon: WorkIcon, path: '/work-experience' },
  { name: 'Portfolio', Icon: PortfolioIcon, path: '/portfolio' },
];

const NavBar = ({ className, viewportWidth, handleClick }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <NavAside className={className} current_theme={theme}>
      {viewportWidth < 1279 && (
        <ToggleButton current_theme={theme} onClick={handleClick}>
          Menu
        </ToggleButton>
      )}
      <ThemeToggleButton className={theme} onClick={toggleTheme}>
        <SunIcon />
      </ThemeToggleButton>
      <Navigation>
        <NavBarList>
          {navBarIcons.map(({ name, Icon, path }) => (
            <NavBarItem key={name}>
              <NavBarLink to={path} current_theme={theme}>
                <Icon width="18" height="18" />
                <NavBarText current_theme={theme}>{name}</NavBarText>
              </NavBarLink>
            </NavBarItem>
          ))}
        </NavBarList>
      </Navigation>
    </NavAside>
  );
};

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
  viewportWidth: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
