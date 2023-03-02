import { MouseEvent, ReactNode, FormEvent } from "react";

export type UiButtonProps = {
	appereance?: string;
	children: string | React.ReactNode;
	className?: string;
	disabled?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
  role?: string;
	onClick: (event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => void;
  styles?: ButtonStyles;
};

export type StyledButtonProps = ButtonStyles & {
  appereance: string;
};

export type ButtonStyles = {
  background?: string;
  color?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  borderColor?: string;
  padding?: string;
}
