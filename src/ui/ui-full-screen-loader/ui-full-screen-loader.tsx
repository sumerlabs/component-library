import React, { FC } from "react";
import UiLoader from "../ui-loader/ui-loader";
import { UiFullScreenLoaderProps } from "./types";
import styles from './ui-full-screen-loader.module.scss';
 
const UiFullScreenLoader: FC<UiFullScreenLoaderProps> = ({
  show,
}) => {
  return (
    <div className={`${styles.uiFullScreenLoader} ${show && styles.show}`}>
      <UiLoader />
    </div>
  );
}
 
export default UiFullScreenLoader;