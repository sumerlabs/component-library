import { FormikHandlers, FormikErrors, FormikTouched } from "formik";

export type CountryTypes = {
  title: string;
  Icon: React.ReactNode;
};

export type EmailType = {
  title: string;
};

export type InputFormik = {
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  onInput?: (event: any) => any;
  errors?: FormikErrors<any>;
  touched?: FormikTouched<any>;
};

export type InputGeneralType = InputFormik & {
  className?: string;
  name?: string;
  title?: string | undefined;
  value?: string | number | any;
  setFieldValue?: any;
  placeholder?: string;
};

export type OptionProps = {
  backgroundImage: string;
};

export type InputTypes = InputGeneralType & {
  className?: string;
  isRequired: boolean;
  id: string;
  maxLength?: number;
  name: string;
  showError?: boolean;
  placeholder?: string;
  type?:string;
  autocomplete?: string;
};
