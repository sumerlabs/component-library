import React, { FC } from "react";
import { UiLoader } from "../ui-loader";
import { UiButtonProps } from "./types";
import { WrapperButton } from "./ui-button.styled";


const UiButton: FC<UiButtonProps> = ({
  appearance,
  className,
  children,
  disabled,
  onClick,
  isLoading,
  icon,
  styles
}) => {

  const handleClick = () => {
    if (!disabled) onClick();
  }

  return (
    <WrapperButton
      role="button"
      type="button"
      appearance={appearance}
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
