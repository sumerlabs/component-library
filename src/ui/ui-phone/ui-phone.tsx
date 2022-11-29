import React, { FC } from "react";
import { Wrapper } from "./ui-phone.styled";
import UiDropdown from "../ui-dropdown/ui-dropdown";
import UiInput from "../ui-input/ui-input";
import { UiPhoneProps } from "./types";
 
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
    <Wrapper className={`${className} ${hasError && 'error'}`}>
      <UiDropdown
        className='selector'
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
        className='input'
        value={phoneValue}
        placeholder={placeholder || "Tu número de celular"}
        hasError={hasError}
        onBlur={onBlur}
        onFocus={onFocusInput}
        onChange={(e: any) => handlePhoneChange(e.target.value)}
      />
      {(!!hint || hasError) && <div className="hint">{errorMessage || hint}</div>}
    </Wrapper>
  );
}
 
export default UiPhone;