import React, { FC } from "react";
import { UiLoader } from "../ui-loader";
import { UiButtonProps } from "./types";
import * as _styles from './ui-button.module.scss';


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
        className={`${_styles.uiButtonWrapper} ${_styles[className]} ${_styles[appereance]}`}
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
