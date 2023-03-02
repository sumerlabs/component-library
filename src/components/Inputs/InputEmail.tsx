import { KeyboardEvent } from "react";
import { InputGeneralType } from "./types";
import { ErrorMessage } from '~/components/ErrorMessage';
import React from "react";
import styles from './input.module.scss';

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
    <div className={styles.inputContainer}>
      <div className={styles.inputBox}>
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
          className={`${styles.labelName} ${
              touched && touched[name] && touched[name] ? styles.error : ""
          }`}
        >
          <span className={styles.contentName}>{title}</span>
        </label>
      </div>
      {touched&& touched[name] && errors && errors[name] ? (
        <ErrorMessage>{errors[name]}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default InputEmail;
