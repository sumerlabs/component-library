import React, { ChangeEvent, FC, useEffect, useRef, useState, KeyboardEvent } from "react";
import { Wrapper } from "./ui-input.styled";
import { UiInputProps } from "./types";
 
const UiInput: FC<UiInputProps> = ({
  className,
  autocomplete = true,
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
  onBlur,
  onInput
}) => {

  const inputRef = useRef<HTMLInputElement| null>(null);
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [text, setText] = useState(value || '');

  useEffect(() => {
    if(inputRef.current && inputRef.current.value.length > 0){
      inputRef.current.classList.toggle('fill')
    }
  }, []);

  useEffect(() => {
    setText(value || '')
  }, [value]);
  
  const handleChange = (e: ChangeEvent<any>) => {
    setIsActive(e.target.value.length > 0);
    setText(e.target.value);
    onChange(e);
  }

  const handleFocus = (event: any) => event.target.select();

  return (
    <Wrapper className={`${className} ${!!hasError && 'error'} ${!!success && 'success'}`}>
      <div className={`input-box ${style} ${prefix && 'is-prefix'}`}>
        {prefix && <span className="prefix">{prefix}</span>}
        <input 
          ref={inputRef}
          type={`${showPassword ? 'text' : type}`}
          className={`input ${isActive && 'fill'} ${!!placeholder && 'is-placeholder'}`} 
          name={name}
          value={text}
          disabled={disabled}
          onBlur={onBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          onInput={onInput}
          onKeyPress={(e: KeyboardEvent<HTMLElement>) => {
            e.key === "Enter" && e.preventDefault();
          }}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          autoComplete={autocomplete ? 'on' : 'off'}
        />
        {!!label && <span className="label">{label}</span>}
        {type === 'password' && (
          <span 
            onClick={() => setShowPassword(s => !s)} 
            className={`show-password ${showPassword ? 'icon-hide-password' : 'icon-show-password'}`}
          />
        )}
      </div>
      {(!!hint || hasError) && <div className="hint">{errorMessage || hint}</div>}
    </Wrapper>
  );
}
 
export default UiInput;