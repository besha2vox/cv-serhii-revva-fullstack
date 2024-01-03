import PropTypes from 'prop-types';

import formatDate from 'utils/formatDate';

import SubTitle from 'components/SubTitle';
import { Wrapper } from './educationItem.styled';

const EducationItem = ({
  logo,
  name,
  link,
  studyField,
  startDate,
  endDate,
  degree,
}) => {
  return (
    <Wrapper>
      <a href={link} target="_blank" rel="noreferrer">
        <img width={100} src={logo} alt={name} />
      </a>
      <div>
        <SubTitle title={name} />
        <p>{studyField}</p>
        {degree && <p>{degree}</p>}
        <p>
          {formatDate(startDate)} -{' '}
          {endDate ? formatDate(endDate) : 'Current time'}
        </p>
      </div>
    </Wrapper>
  );
};

export default EducationItem;

EducationItem.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  studyField: PropTypes.string.isRequired,
  degree: PropTypes.string,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
};
