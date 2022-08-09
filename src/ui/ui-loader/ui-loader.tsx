import React, { FC } from "react";
import { UiLoaderProps } from "./types";
import { Wrapper } from "./ui-loader.styled";
 
const UiLoader: FC<UiLoaderProps> = ({
  className,
  size = 40,
}) => {
  return (
    <Wrapper className={className} style={{ width: `${size}px`, height: `${size}px` }}/>
  );
}
 
export default UiLoader;
