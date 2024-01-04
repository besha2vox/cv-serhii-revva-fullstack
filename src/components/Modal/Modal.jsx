import { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';

import { ThemeContext } from 'contexts/ThemeContext';
import ModalContext from 'context/ModalContext';

import { BackDrop, CloseButton, ModalWindow } from './modal.styled';
import ProjectModalCard from './ProjectModalCard';

const Modal = () => {
  const { setIsModalOpen, props } = useContext(ModalContext);
  const { theme } = useContext(ThemeContext);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handlerKeyupEscape = ({ code }) => {
      if (code !== 'Escape') return;
      handleCloseModal();
    };

    window.addEventListener('keyup', handlerKeyupEscape);

    return () => window.removeEventListener('keyup', handlerKeyupEscape);
  });

  const handlerClickOverlay = ({ target, currentTarget }) => {
    if (target !== currentTarget) return;
    handleCloseModal();
  };

  return createPortal(
    <BackDrop onClick={handlerClickOverlay} current_theme={theme}>
      <ModalWindow current_theme={theme}>
        <CloseButton onClick={handleCloseModal} current_theme={theme} />
        <ProjectModalCard {...props} />
      </ModalWindow>
    </BackDrop>,
    document.getElementById('modal-root')
  );
};

export default Modal;
