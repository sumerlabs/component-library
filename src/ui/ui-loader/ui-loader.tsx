import React, { FC } from "react";
import { UiLoaderProps } from "./types";
import { Wrapper } from "./ui-loader.styled";
 
const UiLoader: FC<UiLoaderProps> = ({
  size = 40,
}) => {
  return (
    <Wrapper style={{ width: `${size}px`, height: `${size}px` }}/>
  );
}
 
export default UiLoader;
