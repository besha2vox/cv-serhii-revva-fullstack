import { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from 'contexts/ThemeContext';

import { SubTitleStyled } from './subTitle.styled';

const SubTitle = ({ title }) => {
  const { theme } = useContext(ThemeContext);

  return <SubTitleStyled current_theme={theme}>{title}</SubTitleStyled>;
};

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubTitle;
