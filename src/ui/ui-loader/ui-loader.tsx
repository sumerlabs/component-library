import React, { FC } from "react";
import { UiLoaderProps } from "./types";
import * as styles from './ui-loader.module.scss';
 
const UiLoader: FC<UiLoaderProps> = ({
  className,
  size = 40,
}) => {
  return (
    <div className={`${styles.uiLoader} ${className}`} style={{ width: `${size}px`, height: `${size}px` }}/>
  );
}
 
export default UiLoader;
