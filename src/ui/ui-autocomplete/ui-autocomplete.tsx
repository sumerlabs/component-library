import React, { ChangeEvent, FC, useMemo, useState } from "react";
import { UiInput, UiInputProps } from "../ui-input";
import { UiAutocompleteOption, UiAutocompleteProps } from "./types";
import { Wrapper } from "./ui-autocomplete.styled";
 
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
    setLocalValue(e.target.value);
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    onFocus && onFocus(e);
    setIsOpen(true);
  }
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    onBlur && onBlur(e);
    setIsOpen(false);
  }

  const handleSelectOption = (option: UiAutocompleteOption) => {
    setIsOpen(false);
    setSelectedValue(option);
    setLocalValue(option.label);
    onChange(option.value);
  }

  return (
    <Wrapper className={`${className} ${isOpen ? 'open' : 'close'} `}>
      <UiInput
        className={`${className}-input`}
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
      <div className={`dropdown-expanded-section dropdown-${expandiblePosition}`}>
        {!!filteredOptions.length ? filteredOptions.map((o, index) => (
          <div 
            key={`dropdown-item-${o.value}-${index}`}
            className={`item ${isCurrentOption(o) && 'active'}`} 
            onClick={() => handleSelectOption(o)}>
            {o.label}
          </div>
        )): (
          <div className={`item no-result`}>No hay resultados</div>
        )}
      </div>
    </Wrapper>
  );
}
 
export default UiAutocomplete;