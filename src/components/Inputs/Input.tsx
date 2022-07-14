import React from "react";
import { KeyboardEvent } from "react";
import { ErrorMessage } from '../ErrorMessage';
import { WrapperInput } from "./Input.styles";
import { InputTypes } from "./types";

const Input = ({
  className,
  errors,
  handleChange,
  handleBlur,
  onInput,
  isRequired,
  id,
  maxLength,
  name,
  placeholder,
  showError,
  title,
  touched,
  value,
  type,
  autocomplete
}: InputTypes) => {
  const handleFocus = (event: any) => event.target.select();
  return (
    <WrapperInput className={className}>
      <div className="input-box">
        <input
          id={id}
          maxLength={maxLength}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onInput={onInput}
          onKeyPress={(e: KeyboardEvent<HTMLElement>) => {
            e.key === "Enter" && e.preventDefault();
          }}
          placeholder={placeholder}
          required={isRequired}
          value={value}
          autoComplete={(autocomplete as string)}
          type={type || 'text'}
        />
        <label
          htmlFor={name}
          className={`label-name ${
            touched && touched[name] && errors && errors[name] ? "error" : ""
          }`}
        >
          <span className="content-name">{title}</span>
        </label>
      </div>
      {showError && touched && touched[name] && errors && errors[name] ? (
        <ErrorMessage className="error">{errors[name]}</ErrorMessage>
      ) : null}
    </WrapperInput>
  );
};

export default Input;
