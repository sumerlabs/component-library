import { StyledModalOverlay, StyledModal, StyledModalHeader, StyledModalBody, StyledModalTitle } from "./Modal.styles";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Close } from "../../assets/img/icons";
import { ModalProps } from './types';

const Modal = ({ show, onClose, children, title, styles, element }: ModalProps) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <StyledModalOverlay overlay={styles?.overlay}>
            <StyledModal initial={{ y: 400 }}
                         animate={{ y: 0 }} transition={{ ease: "easeInOut", duration: 0.3 }}
            content={styles?.content} overlay={styles?.overlay}>
                <StyledModalHeader>
                    {title && <StyledModalTitle>{title}</StyledModalTitle>}
                    <a href="#" onClick={handleCloseClick}>
                        <Close/>
                    </a>
                </StyledModalHeader>
                <StyledModalBody content={styles?.content}>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return createPortal(
            modalContent,
            element || document.body!
        );
    } else {
        return null;
    }
};

export default Modal;