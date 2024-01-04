import { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';

import ModalContext from 'context/ModalContext';

const Modal = () => {
  const { setIsModalOpen, props } = useContext(ModalContext);
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
    <div onClick={handlerClickOverlay}>
      <div>
        <div {...props} />
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
