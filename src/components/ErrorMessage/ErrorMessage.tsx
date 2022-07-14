import { ErrorMessageWrapper, IconWrapper } from "./ErrorMessage.styles";
import React from "react";
import InfoIcon from '~/icons/Information';
import { useTheme } from 'styled-components';

const ErrorMessage = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const theme = useTheme() as any;
  return (
    <ErrorMessageWrapper className={className}>
      <IconWrapper>
        <InfoIcon color={theme.colors.redScale.r2} width="11" height="11" />
      </IconWrapper>
      <span>{children}</span>
    </ErrorMessageWrapper>
  );
};
export default ErrorMessage;
