import React, { FC, useEffect, useState } from "react";
import { UiDropdownOption, UiDropdownProps } from "./types";
import * as styles from "./ui-dropdown.module.scss"; 
 
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
      <div className={`${className}  ${styles.wrapperDropdown} ${isOpen ? `${styles.open}` : `${styles.close}`} ${isFullWidth && `${styles.fullWidth}`}  ${hasError && `${styles.error}`}`} 
      tabIndex={0} 
      onBlur={handleBlur}
      data-testid={`${dataTestId}`}>
      <div className={styles.dropdown} onClick={handleToggle} data-testid={`${dataTestId}-display-box`}>
        <span className={styles.label} data-testid={`${dataTestId}-label`}>{label}</span>
        <span className={`${styles.text} ${!selectedValue && `${styles.placeholder}`}`}>{selectedValue?.label || placeholder}</span>
        <span className="icon-arrow" />
      </div>
      {(!!hint || hasError) && (
        <div className={styles.hintTextDropdown} data-testid={`${dataTestId}-hint`}>
          {errorMessage || hint}
        </div>
      )}
      <div
        className={`${styles.expandedSection} dropdown-${expandiblePosition}`} 
        data-testid={`${dataTestId}-expanded-section`}>
        {options.map((o, index) => (
          <div 
            key={`dropdown-item-${o.value}-${index}`}
            className={`${styles.item} ${isCurrentOption(o) && `${styles.active}`}`} 
            onClick={() => handleSelectOption(o)}
            data-testid={`${dataTestId}-item-${o.value}`}>
            {o.flagUrl && <img src={o.flagUrl} alt="Flag" className={styles.flag} />}
            {o.label}
          </div>
        ))}
      </div>
    </div>    
  );
}
 
export default UiDropdown;