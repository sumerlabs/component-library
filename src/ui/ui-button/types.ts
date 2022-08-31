import { MouseEvent, ReactNode, FormEvent } from "react";

export type UiButtonProps = {
	appearance: string;
	children: string | React.ReactNode;
	className?: string;
	disabled?: boolean;
    isLoading?: boolean;
    icon?: ReactNode;
	onClick: (event?: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => void;
    styles?: ButtonStyles;
};

export type StyledButtonProps = ButtonStyles & {
  appearance: string;
};

export type ButtonStyles = {
  background?: string;
  color?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  borderColor?: string;
}
