export interface UiPhoneOption {
  label: string;
  value: string;
  flagUrl: string;
};

export declare type UiPhoneProps = {
  options: UiPhoneOption[];
  label?: string;
  placeholder?: string;
  hasError?: boolean;
  className?: string;
  errorMessage?: string;
  hint?: string;
  prefixValue?: string;
  phoneValue?: string;
  onBlur?: () => void;
  onChange: (value: { prefixPhone?: string, phone?: string }) => void;
  onFocusInput?: () => void;
};
