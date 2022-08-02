import React, { FC, useEffect, useState } from "react";
import { Wrapper } from "./ui-dropdown.styled";
import { UiDropdownOption, UiDropdownProps } from "./types";
 
const UiDropdown: FC<UiDropdownProps> = ({
  label,
  value,
  className,
  expandiblePosition = 'bottom',
  hasError,
  errorMessage,
  placeholder,
  hint,
  dataTestId = 'ui-dropdown',
  options,
  isFullWidth,
  onChange,
  onBlur,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<UiDropdownOption>();

  const isCurrentOption = (option: UiDropdownOption) => option.value === selectedValue?.value;

  const handleToggle = () => setIsOpen(s => !s);

  const handleBlur = () => {
    setIsOpen(false);
    onBlur && onBlur();
  }

  const handleSelectOption = (option: UiDropdownOption) => {
    setIsOpen(false);
    setSelectedValue(option);
    onChange(option.value);
  }

  useEffect(() => {
    if (value && value !== selectedValue?.value) {
      const option = options.find(o => o.value === value);
      setSelectedValue(option);
    }
  }, [value, options.length]);

  return (
    <Wrapper 
      className={`${className} 
        ${isOpen ? 'open' : 'close'} 
        ${isFullWidth && 'fullWidth'} 
        ${hasError && 'error'}`} 
      tabIndex={0} 
      onBlur={handleBlur}
      data-testid={`${dataTestId}`}>
      <div className="dropdown" onClick={handleToggle} data-testid={`${dataTestId}-display-box`}>
        <span className="label" data-testid={`${dataTestId}-label`}>{label}</span>
        <span className={`text ${!selectedValue && 'placeholder'}`}>{selectedValue?.label || placeholder}</span>
        <span className="icon-arrow" />
      </div>
      {(!!hint || hasError) && (
        <div className="hint-text" data-testid={`${dataTestId}-hint`}>
          {errorMessage || hint}
        </div>
      )}
      <div
        className={`dropdown-expanded-section dropdown-${expandiblePosition}`} 
        data-testid={`${dataTestId}-expanded-section`}>
        {options.map((o, index) => (
          <div 
            key={`dropdown-item-${o.value}-${index}`}
            className={`item ${isCurrentOption(o) && 'active'}`} 
            onClick={() => handleSelectOption(o)}
            data-testid={`${dataTestId}-item-${o.value}`}>
            {o.flagUrl && <img src={o.flagUrl} alt="Flag" className="flag" />}
            {o.label}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
 
export default UiDropdown;