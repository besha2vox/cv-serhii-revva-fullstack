import PropTypes from 'prop-types';

import SubTitle from 'components/SubTitle';
import {
  Info,
  InfoWrapper,
  LinksWrapper,
  ProjectCard,
  Link,
} from './projectModalCard.styled';

const ProjectModalCard = ({
  screenshot,
  name,
  livePage,
  restApiDoc,
  sourceCodeFrontend,
  sourceCodeBackend,
  technologys,
  role,
  description,
}) => {
  return (
    <ProjectCard>
      <InfoWrapper>
        <div>
          <img width={400} src={screenshot} alt={name} />
        </div>
        <Info>
          <SubTitle title={name} />
          <p>
            <b>My role:</b> <span>{role}</span>
          </p>
          <p>
            <b>Stack:</b> [ {technologys.join(', ')} ]
          </p>
          <p>
            <b>Description:</b>{' '}
            {description.split('\n').map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </p>
        </Info>
      </InfoWrapper>
      <LinksWrapper>
        <p> Links:</p>
        <ul>
          <li>
            <Link href={livePage} target="_blank" rel="noreferrer">
              Live page
            </Link>
          </li>
          {sourceCodeFrontend && (
            <li>
              <Link href={sourceCodeFrontend} target="_blank" rel="noreferrer">
                Source code
              </Link>
            </li>
          )}
          {restApiDoc && (
            <li>
              <Link href={restApiDoc} target="_blank" rel="noreferrer">
                Api docs
              </Link>
            </li>
          )}
          {sourceCodeBackend && (
            <li>
              <Link href={sourceCodeBackend} target="_blank" rel="noreferrer">
                Api source code
              </Link>
            </li>
          )}
        </ul>
      </LinksWrapper>
    </ProjectCard>
  );
};

export default ProjectModalCard;

ProjectModalCard.propTypes = {
  screenshot: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  livePage: PropTypes.string.isRequired,
  restApiDoc: PropTypes.string,
  sourceCodeFrontend: PropTypes.string,
  sourceCodeBackend: PropTypes.string,
  technologys: PropTypes.arrayOf(PropTypes.string).isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
