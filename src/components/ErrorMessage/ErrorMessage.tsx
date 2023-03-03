import React from "react";
import InfoIcon from '~/icons/Information';
import styles from './error-message.module.scss';

const ErrorMessage = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${styles.errorMessage} ${className}`}>
      <span className={styles.icon}>
        <InfoIcon color={"#ff5b24"} width="11" height="11" />
      </span>
      <span>{children}</span>
    </div>
  );
};
export default ErrorMessage;
