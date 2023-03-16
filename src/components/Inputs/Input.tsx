import React from "react";
import { KeyboardEvent } from "react";
import { ErrorMessage } from '../ErrorMessage';
import { InputTypes } from "./types";
import styles from './input.module.scss';

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
        <div className={`${styles.inputContainer} ${className}`}>

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
                className={`${styles.labelName} ${
                    touched && touched[name] && errors && errors[name] ? styles.error : ""
                }`}
            >
                <span className={styles.contentName}>{title}</span>
            </label>

            {showError && touched && touched[name] && errors && errors[name] ? (
                <ErrorMessage className={styles.error}><>{errors[name]}</></ErrorMessage>
            ) : null}
        </div>
    );
};

export default Input;
