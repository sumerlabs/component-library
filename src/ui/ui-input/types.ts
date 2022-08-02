import { ChangeEvent } from "react";

export declare type UiInputProps = {
  className?: string;
  hint?: string;
  label?: string;
  name?: string;
  value?: string;
  type?: 'text' | 'number';
  maxLength?: number;
  placeholder?: string;
  hasError?: boolean;
  errorMessage?: string;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
