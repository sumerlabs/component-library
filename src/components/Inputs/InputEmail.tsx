import { KeyboardEvent } from "react";
import { WrapperInput } from "./Input.styles";
import { InputGeneralType } from "./types";
import { ErrorMessage } from '~/components/ErrorMessage';
import React from "react";

const InputEmail = ({
  title,
  handleChange,
  handleBlur,
  value,
  touched,
  errors,
  placeholder,
  name = "username",
}: InputGeneralType) => {
  return (
    <WrapperInput>
      <div className="input-box">
        <input
          required
          id={name}
          name={name}
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={(event: KeyboardEvent<HTMLElement>) => {
            event.key === "Enter" && event.preventDefault();
          }}
          placeholder={placeholder}
          value={value}
        />
        <label
          htmlFor="email"
          className={`label-name ${
              touched && touched[name] && touched[name] ? "error" : ""
          }`}
        >
          <span className="content-name">{title}</span>
        </label>
      </div>
      {touched&& touched[name] && errors && errors[name] ? (
        <ErrorMessage>{errors[name]?.toString()}</ErrorMessage>
      ) : null}
    </WrapperInput>
  );
};

export default InputEmail;
