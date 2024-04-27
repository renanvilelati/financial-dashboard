import { ReactNode } from "react";
import { StyledModal } from "./style";
import {MdClose} from 'react-icons/md'
import { useTheme } from "styled-components";

interface iModal {
  isOpen: boolean
  children: ReactNode
  closeModal: () => void
}

const Modal = ({isOpen, children, closeModal}: iModal) => {
  const theme = useTheme()
    
  if (isOpen) {

    return (
      <StyledModal isDarkTheme={theme.type === 'dark'}>
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
