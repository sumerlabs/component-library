import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ModalContextProps } from "./types";
import styles from "./Modal.module.scss";

export const Modal = ({
  show,
  children,
  element,
  type,
  showHeader = true,
  title,
  closeElement,
  className,
  styles: stylesComponent,
  content,
  overlay,
  header,
  body,
  onClose,
}: ModalContextProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = () => {
    onClose && onClose();
  };
  console.log(closeElement)

  const modalContent = show ? (
    <aside
      className={`${styles.modalComponent} ${
        type ? styles[`modalComponent__${type}` as keyof typeof styles] : ""
      } ${className || ""}`}
      style={stylesComponent}
    >
      <div
        className={`${styles.modalOverlay} ${overlay?.className || ""}`}
        style={overlay?.styles}
        onClick={handleClose}
      ></div>
      <div
        className={`${styles.modalContainer}  ${content?.className || ""}`}
        style={content?.styles}
      >
        {showHeader && (
          <header
            className={`${styles.modalHeader} ${header?.className || ""}`}
            style={header?.styles}
          >
            <span>
              {!!title && <h3 className={styles.modalTitle}>{title}</h3>}
            </span>
            {closeElement ? (
              <div onClick={handleClose}>{closeElement}</div>
            ) : (
              <button className={styles.modalClose} onClick={handleClose}>
                <span className="icon-close"></span>
              </button>
            )}
          </header>
        )}
        <div
          className={`${styles.modalBody} ${body?.className || ""}`}
          style={body?.styles}
        >
          {children}
        </div>
      </div>
    </aside>
  ) : null;

  if (isBrowser) {
    return createPortal(modalContent, element || document.body!, "modal");
  } else {
    return null;
  }
};
