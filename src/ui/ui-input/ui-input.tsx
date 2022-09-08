import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { Wrapper } from "./ui-input.styled";
import { UiInputProps } from "./types";
 
const UiInput: FC<UiInputProps> = ({
  className,
  hint,
  type = 'text',
  style = 'outline',
  name,
  value,
  placeholder,
  label,
  prefix,
  disabled,
  hasError,
  success,
  maxLength,
  minLength,
  errorMessage,
  onChange,
  onFocus,
  onBlur
}) => {

  const inputRef = useRef<HTMLInputElement| null>(null);
  const [isActive, setIsActive] = useState(false);
  const [showPasword, setShowPassword] = useState(false);

  useEffect(() => {
    if(inputRef.current && inputRef.current.value.length > 0){
      inputRef.current.classList.toggle('fill')
    }
  }, [])
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.target.value.length > 0);
    if (e.target.maxLength != -1) {
      if (e.target.maxLength >= e.target.value.length) onChange(e);
    } else {
      onChange(e);
    }
  }

  return (
    <Wrapper className={`${className} ${!!hasError && 'error'} ${!!success && 'success'}`}>
      <div className={`input-box ${style} ${prefix && 'is-prefix'}`}>
        {prefix && <span className="prefix">{prefix}</span>}
        <input 
          ref={inputRef}
          type={`${showPasword ? 'text' : type}`}
          className={`input ${isActive && 'fill'} ${!!placeholder && 'is-placeholder'}`} 
          name={name}
          value={value}
          disabled={disabled}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={handleChange}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
        />
        {!!label && <span className="label">{label}</span>}
        {type === 'password' && (
          <span onClick={() => setShowPassword(s => !s)} 
                className={`show-password ${showPasword ? 'icon-hide-password' : 'icon-show-password'}`}/>
        )}
      </div>
      {(!!hint || hasError) && <div className="hint">{errorMessage || hint}</div>}
    </Wrapper>
  );
}
 
export default UiInput;