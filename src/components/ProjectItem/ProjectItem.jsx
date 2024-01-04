import PropTypes from 'prop-types';
import { useContext } from 'react';

import SubTitle from 'components/SubTitle';
import { Button, Description, ImgWrapper } from './projectItem.styled';
import ModalContext from 'context/ModalContext';

const ProjectItem = ({ screenshot, name, description, ...props }) => {
  const { setIsModalOpen, setProps } = useContext(ModalContext);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setProps({ ...props, screenshot, name, description });
  };

  return (
    <li>
      <Button onClick={handleOpenModal}>
        <ImgWrapper>
          <img width={350} src={screenshot} alt={name} />
          <Description>{description}</Description>
        </ImgWrapper>
        <SubTitle title={name} />
      </Button>
    </li>
  );
};

export default ProjectItem;

ProjectItem.propTypes = {
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
