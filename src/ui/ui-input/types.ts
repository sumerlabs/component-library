import { ChangeEvent } from "react";

export declare type UiInputProps = {
  className?: string;
  hint?: string;
  label?: string;
  name?: string;
  value?: string;
  style?: string;
  type?: 'text' | 'number' | 'password' | 'email';
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  prefix?: string;
  placeholder?: string;
  hasError?: boolean;
  success?: boolean;
  errorMessage?: string;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
