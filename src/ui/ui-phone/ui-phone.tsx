import React, { FC } from "react";
import UiDropdown from "../ui-dropdown/ui-dropdown";
import UiInput from "../ui-input/ui-input";
import { UiPhoneProps } from "./types";
import * as styles from './ui-phone.module.scss';
 
const UiPhone: FC<UiPhoneProps> = ({
  options,
  hasError,
  className,
  prefixValue,
  phoneValue,
  errorMessage,
  placeholder,
  hint,
  label,
  onBlur,
  onChange,
  onFocusInput,
}) => {

  const handlePrefixChange = (value: string) => {
    onChange({ prefixPhone: value });
  }

  const handlePhoneChange = (value: string) => {
    onChange({ phone: value });
  }

  return (
    <div className={`${styles.uiPhone} ${className} ${hasError && styles.error}`}>
      <UiDropdown
        className={styles.selector}
        label={label || "Teléfono*"}
        placeholder="---"
        value={prefixValue}
        hasError={hasError}
        options={options}
        onBlur={onBlur}
        onChange={handlePrefixChange} 
      />
      <UiInput 
        name="phone"
        type="number"
        maxLength={12}
        className={styles.input}
        value={phoneValue}
        placeholder={placeholder || "Tu número de celular"}
        hasError={hasError}
        onBlur={onBlur}
        onFocus={onFocusInput}
        onChange={(e: any) => handlePhoneChange(e.target.value)}
      />
      {(!!hint || hasError) && <div className={styles.hint}>{errorMessage || hint}</div>}
    </div>
  );
}
 
export default UiPhone;