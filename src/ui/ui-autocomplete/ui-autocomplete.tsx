import React, { ChangeEvent, FC, useMemo, useState } from "react";
import { UiInput, UiInputProps } from "../ui-input";
import { UiAutocompleteOption, UiAutocompleteProps } from "./types";
import styles from './ui-autocomplete.module.scss';
 
const UiAutocomplete: FC<UiAutocompleteProps & Omit<UiInputProps, 'onChange'>> = ({
  className,
  hint,
  options,
  label,
  type = 'text',
  name,
  value,
  placeholder,
  hasError,
  maxLength,
  errorMessage,
  expandiblePosition = 'bottom',
  onChange,
  onFocus,
  onBlur
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [localValue, setLocalValue] = useState(value || '');
  const [selectedValue, setSelectedValue] = useState<UiAutocompleteOption>();

  const isCurrentOption = (option: UiAutocompleteOption) => option.value === selectedValue?.value;

  const filteredOptions = useMemo(() => 
    !!localValue ? options.filter(o => o.label.toLowerCase().includes(localValue.toLowerCase())) : 
    options, [localValue, options]);

  const handleWriteText = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLocalValue(e.target.value);
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    onFocus && onFocus(e);
    setIsOpen(true);
  }
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    onBlur && onBlur(e);
  }

  const handleSelectOption = (option: UiAutocompleteOption) => {
    setIsOpen(false);
    setSelectedValue(option);
    setLocalValue(option.label);
    onChange(option.value);
  }

  return (
    <div className={`${styles.uiAutocomplete} ${className} ${isOpen ? styles.open : styles.close} `}>
      <UiInput
        className={`${className}-input`}
        autocomplete={false}
        hint={hint}
        label={label}
        type={type}
        name={name}
        value={localValue || value}
        placeholder={placeholder}
        hasError={hasError}
        maxLength={maxLength}
        errorMessage={errorMessage}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleWriteText}
      />
      <div className={`${styles.dropdownExpandedSection} dropdown-${expandiblePosition}`}>
        {!!filteredOptions.length ? filteredOptions.map((o, index) => (
          <div 
            key={`dropdown-item-${o.value}-${index}`}
            className={`${styles.item} ${isCurrentOption(o) && styles.active}`}
            onClick={() => handleSelectOption(o)}>
            {o.label}
          </div>
        )): (
          <div className={`${styles.item} ${styles.noResult}`}>No hay resultados</div>
        )}
      </div>
    </div>
  );
}
 
export default UiAutocomplete;