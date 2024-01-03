import PropTypes from 'prop-types';

import SubTitle from 'components/SubTitle';
import {
  Wrapper,
  ResponsibilitiesList,
  ResponsibilitiesItem,
} from './workExperienceItem.styled';

import formatDate from 'utils/formatDate';

const WorkExperienceItem = ({
  logo,
  company,
  link,
  country,
  position,
  employmentType,
  responsibilities,
  startDate,
  endDate,
}) => {
  return (
    <>
      <Wrapper>
        <a href={link} target="_blank" rel="noreferrer">
          <img width={80} src={logo} alt={company} />
        </a>
        <div>
          <SubTitle title={company} />
          <p>
            {position} • {employmentType}
          </p>
          <p>
            {formatDate(startDate)} -{' '}
            {endDate ? formatDate(endDate) : 'Current time'} • {country}
          </p>
        </div>
      </Wrapper>
      <ResponsibilitiesList>
        {responsibilities.map(s => (
          <ResponsibilitiesItem key={s}>
            <p>• {s}</p>
          </ResponsibilitiesItem>
        ))}
      </ResponsibilitiesList>
    </>
  );
};

export default WorkExperienceItem;

WorkExperienceItem.propTypes = {
  logo: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
};
