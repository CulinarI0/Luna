import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return { isModalOpen, handleOpenModal, handleCloseModal };
};

export default useModal;