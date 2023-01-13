import { KeyboardEvent, useState } from "react";

import { WrapperInput } from "./Input.styles";
import { InputGeneralType } from "./types";
import { ErrorMessage } from '~/components/ErrorMessage';
import React from "react";
import Password from '~/icons/Password';

const InputPassword = ({
  title,
  handleChange,
  handleBlur,
  name = "password",
  value,
  touched,
  errors,
}: InputGeneralType) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <WrapperInput>
      <div className="input-box">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={(e: KeyboardEvent<HTMLElement>) => {
            e.key === "Enter" && e.preventDefault();
          }}
          value={value}
          required
        />
        <label
          htmlFor={name}
          className={`label-name ${
              touched && touched[name] && errors && errors[name] ? "error" : ""
          }`}
        >
          <span className="content-name">{title}</span>
        </label>
        <button
          className="toggle"
          onClick={handlePasswordVisibility}
          type="button"
        >
          <span className="iconinput">
            <Password />
          </span>
        </button>
      </div>
      {touched && touched[name] && errors && errors[name] ? (
          <ErrorMessage>{errors[name]?.toString()}</ErrorMessage>
      ) : null}
    </WrapperInput>
  );
};

export default InputPassword;
