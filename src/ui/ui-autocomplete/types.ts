export declare type UiAutocompleteProps = {
  expandiblePosition?: 'top' | 'bottom';
  options: UiAutocompleteOption[];
  onChange: (v: string) => void;
};

export declare type UiAutocompleteOption = {
  label: string;
  value: string;
};
