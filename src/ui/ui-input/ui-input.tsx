import React, { ChangeEvent, FC } from "react";
import { Wrapper } from "./ui-input.styled";
import { UiInputProps } from "./types";
 
const UiInput: FC<UiInputProps> = ({
  className,
  hint,
  label,
  type = 'text',
  name,
  value,
  placeholder,
  hasError,
  maxLength,
  errorMessage,
  onChange,
  onFocus,
  onBlur
}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.maxLength != -1) {
      if (e.target.maxLength >= e.target.value.length) onChange(e);
    } else {
      onChange(e);
    }
  }

  return (
    <Wrapper className={`${className} ${!!hasError && 'error'}`}>
      <div className="input-box">
        <input 
          type={type}
          className="input" 
          name={name}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder={placeholder ? placeholder : label}
        />
        {!!label && <span className="label">{label}</span>}
      </div>
      {(!!hint || hasError) && <div className="hint">{errorMessage || hint}</div>}
    </Wrapper>
  );
}
 
export default UiInput;