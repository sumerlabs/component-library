import { StyledModalOverlay, StyledModal, StyledModalHeader, StyledModalBody, StyledModalTitle } from "./Modal.styles";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Close } from "../../assets/img/icons";
import { ModalProps } from './types';
import { getTransition } from './transition';

const Modal = ({ show, onClose, children, title, styles, element, closeElement, showHeader = true }: ModalProps) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onClose();
    };

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const transition = getTransition(styles?.content?.type)

    const modalContent = show ? (
        <StyledModalOverlay overlay={styles?.overlay} onClick={handleCloseClick}>
            <StyledModal variants={variants} initial={transition.initial}
                         animate={transition.animate} transition={transition.transition}
                         onClick={(e) => e.stopPropagation()}
            content={styles?.content} overlay={styles?.overlay}>
                {showHeader && (
                    <StyledModalHeader>
                        <StyledModalTitle>{title}</StyledModalTitle>
                        {closeElement ? <span onClick={handleCloseClick}>{closeElement}</span> : <Close onClick={handleCloseClick} />}
                    </StyledModalHeader>
                )}
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