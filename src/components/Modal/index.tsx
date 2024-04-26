import { ReactNode } from "react";
import { StyledModal } from "./style";
import {MdClose} from 'react-icons/md'

interface iModal {
  isOpen: boolean
  children: ReactNode
  closeModal: () => void
}

const Modal = ({isOpen, children, closeModal}: iModal) => {
  if (isOpen) {

    return (
      <StyledModal>
        <div onClick={closeModal} className="background" >
          <div onClick={(e) => e.stopPropagation()} className="content">
          <div className="header">
            <button onClick={closeModal}>{<MdClose size={24} />}</button>
          </div>
            {children}
          </div>
        </div>
      </StyledModal>
    );
  }
};

export default Modal;
