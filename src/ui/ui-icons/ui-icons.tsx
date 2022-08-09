import React, { FC } from "react";
import { UiIconsProps } from "./types";

const UiIcons: FC<UiIconsProps> = ({ env }) => {

  const IconsDev = React.lazy(() => import('./ui-icons-dev'));
  const IconsProd = React.lazy(() => import('./ui-icons-prod'));

  return (
    <React.Suspense fallback={<></>}>
      {env === 'env' && <IconsDev />}
      {env === 'prod' && <IconsProd />}
    </React.Suspense>
  );
}
 
export default UiIcons;