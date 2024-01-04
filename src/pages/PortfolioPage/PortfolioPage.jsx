import { useState } from 'react';

import Title from 'components/Title';
import ProjectsList from 'components/ProjectsList';
import ModalContext from 'context/ModalContext';
import Modal from 'components/Modal';

import { petProjects, comercialProjects } from 'data/projects';

const PortfolioPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [props, setProps] = useState({});

  return (
    <>
      <Title title="Portfolio" />
      <ModalContext.Provider
        value={{ isModalOpen, setIsModalOpen, props, setProps }}
      >
        <ProjectsList
          projects={petProjects}
          setIsModalOpen={setIsModalOpen}
          title="Pet Projects"
        />
        <ProjectsList
          projects={comercialProjects}
          setIsModalOpen={setIsModalOpen}
          title="Comercial Projects"
        />
        {isModalOpen && <Modal />}
      </ModalContext.Provider>
    </>
  );
};

export default PortfolioPage;
