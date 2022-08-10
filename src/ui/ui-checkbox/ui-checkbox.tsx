import React, { FC, useEffect, useState } from "react";
import { UiCheckboxProps } from "./types";
import { Wrapper } from "./ui-checkbox.styled";
 
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
    <Wrapper 
      className={`${className} ${isActive && 'active'}`} 
      onClick={handleClick} 
      style={{ width: `${size}px`, height: `${size}px` }}>
      <span 
        className={`icon icon-check`} 
        style={{ width: `${size}px`, height: `${size}px`, fontSize: `${size - 2}px` }}
      />
    </Wrapper>
  );
}
 
export default UiCheckbox;