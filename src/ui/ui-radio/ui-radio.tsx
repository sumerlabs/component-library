import React, { FC, useEffect, useState } from "react";
import { UiRadioProps } from "./types";
import styles from './ui-radio.module.scss';
 
const UiRadio: FC<UiRadioProps> = ({
  className,
  active = false,
  onChange,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = () => {
    if(!isActive){
      setIsActive(a => !a);
      onChange && onChange(!isActive);
    }
  }

  useEffect(() => {
    if (isActive !== active) setIsActive(active);
  }, [active]);

  return (
    <div className={`${styles.uiRadio} ${className} ${isActive && styles.active}`} onClick={handleChange}>
      <div className={styles.fill} />
    </div>
  );
}
 
export default UiRadio;