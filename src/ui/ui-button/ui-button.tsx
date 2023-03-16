import React, { FC } from "react";
import { UiLoader } from "../ui-loader";
import { UiButtonProps } from "./types";
import _styles from './ui-button.module.scss';


const UiButton: FC<UiButtonProps> = ({
  appereance,
  className,
  children,
  disabled,
  onClick,
  isLoading,
  icon,
  role,
  styles
}) => {

  const handleClick = (e: React.MouseEvent<any>) => {
    if (!disabled) onClick(e);
  }

  return (
    <button
        className={`${className} ${_styles.uiButtonWrapper} ${className && _styles[className as keyof typeof styles]} ${_styles[appereance as keyof typeof styles]}`}
        style={{...styles}}
        role={role}
        onClick={handleClick}
        disabled={disabled}
        type="button">
      {!isLoading ? children : <UiLoader size={20} />}
      {icon}
    </button>
  );
};

export default UiButton;
