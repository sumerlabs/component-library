import React, { FC } from "react";
import UiLoader from "../ui-loader/ui-loader";
import { Wrapper } from "./ui-full-screen-loader.styled";
import { UiFullScreenLoaderProps } from "./types";
 
const UiFullScreenLoader: FC<UiFullScreenLoaderProps> = ({
  show,
}) => {
  return (
    <Wrapper className={`${show && 'show'}`}>
      <UiLoader />
    </Wrapper>
  );
}
 
export default UiFullScreenLoader;