import React, { FC, useEffect, useState } from "react";
import { UiCheckboxProps } from "./types";
import { Wrapper } from "./ui-checkbox.styled";
 
const UiCheckbox: FC<UiCheckboxProps> = ({
  active,
  size,
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
      className={`${isActive && 'active'}`} 
      onClick={handleClick} 
      style={{ width: `${size}px`, height: `${size}px` }}>
      <div className="fill">
        <span className={`icon icon-check`} />
      </div>
    </Wrapper>
  );
}
 
export default UiCheckbox;