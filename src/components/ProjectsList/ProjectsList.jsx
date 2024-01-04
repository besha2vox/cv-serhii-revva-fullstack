import PropTypes from 'prop-types';

import SubTitle from 'components/SubTitle';
import ProjectItem from 'components/ProjectItem';
import { List } from './projectsList.styled';

const ProjectsList = ({ projects, title }) => {
  return (
    <>
      <SubTitle title={title} />
      <List>
        {projects.map(props => (
          <ProjectItem key={props.name} {...props} />
        ))}
      </List>
    </>
  );
};

export default ProjectsList;

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      screenshot: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      livePage: PropTypes.string.isRequired,
      restApiDoc: PropTypes.string,
      sourceCodeFrontend: PropTypes.string,
      sourceCodeBackend: PropTypes.string,
      technologys: PropTypes.arrayOf(PropTypes.string).isRequired,
      role: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
