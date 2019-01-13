import * as React from 'react';
import * as ReactModal from 'react-modal';

interface Props {
  showModal: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
}

const Modal: React.SFC<Props> = ({ showModal, handleCloseModal, children }) => {
  return (
    <ReactModal 
      isOpen={showModal}
      contentLabel="work log detail modal"
      onRequestClose={handleCloseModal}
    >
      { children }
    </ReactModal>
  )
};

export default Modal;
