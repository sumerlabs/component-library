export interface UiPhoneOption {
  label: string;
  value: string;
  flagUrl: string;
};

export declare type UiPhoneProps = {
  options: UiPhoneOption[];
  hasError?: boolean;
  errorMessage?: string;
  hint?: string;
  prefixValue?: string;
  phoneValue?: string;
  onBlur?: () => void;
  onChange: (value: { prefixPhone?: string, phone?: string }) => void;
  onFocusInput?: () => void;
};
