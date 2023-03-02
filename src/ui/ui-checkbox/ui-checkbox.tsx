import React, { FC, useEffect, useState } from "react";
import { UiCheckboxProps } from "./types";
import { Wrapper } from "./ui-checkbox.styled";
import styles from './ui-checkbox.module.scss';
 
const UiCheckbox: FC<UiCheckboxProps> = ({
  active,
  className,
  size = 20,
  onChange,
}) => {
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    setIsActive(a => !a);
    onChange(!isActive);
  }

  useEffect(() => {
    if (active !== isActive)setIsActive(active);
  }, [active]);

  return (
    <div
      className={`${styles.uiCheckbox} ${className} ${isActive && styles.active}`}
      onClick={handleClick} 
      style={{ width: `${size}px`, height: `${size}px` }}>
      <span
        className={`${styles.icon} icon-check`}
        style={{ width: `${size}px`, height: `${size}px`, fontSize: `${size - 2}px` }}
      />
    </div>
  );
}
 
export default UiCheckbox;