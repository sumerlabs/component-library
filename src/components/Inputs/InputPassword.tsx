import { KeyboardEvent, useState } from "react";
import { InputGeneralType } from "./types";
import { ErrorMessage } from '~/components/ErrorMessage';
import React from "react";
import Password from '~/icons/Password';
import styles from './input.module.scss';

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
    <div className={styles.inputContainer}>
      <div className={styles.inputBox}>
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
          className={`${styles.labelName} ${
              touched && touched[name] && errors && errors[name] ? styles.error : ""
          }`}
        >
          <span className={styles.contentName}>{title}</span>
        </label>
        <button
          className={styles.toggle}
          onClick={handlePasswordVisibility}
          type="button"
        >
          <span className={styles.iconInput}>
            <Password />
          </span>
        </button>
      </div>
      {touched && touched[name] && errors && errors[name] ? (
          <ErrorMessage>{errors[name]}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default InputPassword;
