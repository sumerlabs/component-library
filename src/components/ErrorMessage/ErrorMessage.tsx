import React from "react";
import InfoIcon from '~/icons/Information';
import { useTheme } from 'styled-components';
import styles from './error-message.module.scss';

const ErrorMessage = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const theme = useTheme() as any;
  return (
    <div className={`${styles.errorMessage} ${className}`}>
      <span className={styles.icon}>
        <InfoIcon color={theme.colors.redScale.r2} width="11" height="11" />
      </span>
      <span>{children}</span>
    </div>
  );
};
export default ErrorMessage;
