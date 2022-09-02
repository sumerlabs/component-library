import React, { FC } from "react";
import { UiLoader } from "../ui-loader";
import { UiButtonProps } from "./types";
import { WrapperButton } from "./ui-button.styled";


const UiButton: FC<UiButtonProps> = ({
  appereance,
  className,
  children,
  disabled,
  onClick,
  isLoading,
  icon,
  styles
}) => {

  const handleClick = (e: React.MouseEvent<any>) => {
    if (!disabled) onClick(e);
  }

  return (
    <WrapperButton
      role="button"
      type="button"
      appereance={appereance as string}
      className={className}
      disabled={disabled}
      onClick={handleClick}
      {...styles}
    >
      {!isLoading ? children : <UiLoader size={20} />}
      {icon}
    </WrapperButton>
  );
};

export default UiButton;
