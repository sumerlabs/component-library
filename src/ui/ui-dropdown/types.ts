export declare type UiDropdownOption = {
  label: string;
  value: string;
  flagUrl?: string;
};

export declare type UiDropdownProps = {
  label: string;
  className?: string;
  value?: string;
  expandiblePosition?: 'top' | 'bottom';
  options: UiDropdownOption[];
  hasError?: boolean;
  errorMessage?: string;
  hint?: string;
  dataTestId?: string,
  placeholder?: string;
  isFullWidth?: boolean;
  onChange: (value: string) => void;
  onBlur?: () => void;
};
