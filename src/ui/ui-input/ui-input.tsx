import React, { ChangeEvent, FC, useEffect, useRef, useState, KeyboardEvent } from "react";
import { UiInputProps } from "./types";
import * as styles from './ui-input.module.scss';
 
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
  role = 'ds-input-component',
  onChange,
  onBlur,
  onInput,
  onFocus
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
    setText(value || '');
    setIsActive(!!value);
  }, [value]);
  
  const handleChange = (e: ChangeEvent<any>) => {
    setIsActive(e.target.value.length > 0);
    setText(e.target.value);
    
    if (e.target.maxLength != -1) {
      if (e.target.maxLength >= e.target.value.length) onChange(e);
    } else {
      onChange(e);
    }
  }

  return (
    <label role={`${role}-container`} className={`${styles.uiInput} ${className} ${!!hasError && styles.error} ${!!success && styles.success}`}>
      <div className={`${styles.inputBox} ${styles.inputBox} ${styles[style as keyof typeof styles]} ${style} ${prefix && styles.isPrefix}`}>
        {prefix && <span role={`${role}-input-prefix`} className={styles.prefix}>{prefix}</span>}
        <input
          role={`${role}-input`}
          ref={inputRef}
          type={`${showPassword ? 'text' : type}`}
          className={`${styles.input} ${isActive && styles.fill} ${!!placeholder && styles.isPlaceholder}`}
          name={name}
          value={text}
          disabled={disabled}
          onBlur={onBlur}
          onFocus={onFocus}
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
        {!!label && <span className={styles.label}>{label}</span>}
        {type === 'password' && (
          <span
            role={`${role}-icon-password`}
            onClick={() => setShowPassword(s => !s)} 
            className={`${styles.showPassword} ${showPassword ? 'icon-hide-password' : 'icon-show-password'}`}
          />
        )}
      </div>
      {(!!hint || hasError) && <div role={`${role}-message`} className={styles.hint}>{errorMessage || hint}</div>}
    </label>
  );
}
 
export default UiInput;