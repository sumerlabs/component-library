import React, { FC, useEffect, useState } from "react";
import { UiRadioProps } from "./types";
import { Wrapper } from "./ui-radio.styled";
 
const UiRadio: FC<UiRadioProps> = ({
  active = false,
  onChange,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = () => {
    setIsActive(a => !a);
    onChange && onChange(!isActive);
  }

  useEffect(() => {
    if (isActive !== active) setIsActive(active);
  }, [active]);

  return (
    <Wrapper className={`${isActive && 'active'}`} onClick={handleChange}>
      <div className="fill" />
    </Wrapper>
  );
}
 
export default UiRadio;