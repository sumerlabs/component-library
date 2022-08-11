import React, { FC } from "react";
import UiLoader from "../ui-loader/ui-loader";
import { Wrapper } from "./ui-button.styled";
import { UiButtonProps } from "./types";
 
const UiButton: FC<UiButtonProps> = ({
  text,
  iconRight,
  className,
  isExpert,
  isSecondary,
  isDisabled,
  isLoading,
  onClick,
}) => {

  const handleClick = () => {
    if (!isDisabled) onClick();
  }

  return (
    <Wrapper className={`
      ${className} 
      ${isExpert && 'expert'}
      ${isDisabled && 'disabled'}
      ${isSecondary && 'secondary'}
    `} onClick={handleClick}>
      {!isLoading ? text : <UiLoader size={20} />}
      {iconRight}
    </Wrapper>
  );
}
 
export default UiButton;