import { FormikHandlers } from "formik";
import { ChangeEvent } from "react";

export declare type UiInputProps = {
  className?: string;
  autocomplete?: boolean;
  hint?: string;
  label?: string;
  name?: string;
  value?: string | number | any;
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
  onBlur?: FormikHandlers["handleBlur"];
  onChange: FormikHandlers["handleChange"];
  onInput?: (event: any) => any;
};
