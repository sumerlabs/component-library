import { ReactNode } from "react";

export declare type UiButtonProps = {
  text: string;
  isExpert?: boolean;
  iconRight?: ReactNode;
  isSecondary?: boolean;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
};
