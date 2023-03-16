import { KeyboardEvent, useEffect, useMemo, useState } from "react";
import { InputGeneralType } from "./types";
import { Selected } from '~/components/DropDown/types';
import { DropDown } from '~/components/DropDown';
import { ErrorMessage } from '~/components/ErrorMessage';
import React from "react";
import { isEmpty } from '~/common';
import styles from './input.module.scss';

const InputPhone = ({
  errors,
  className,
  handleChange,
  handleBlur,
  setFieldValue,
  touched,
  title,
  value,
}: InputGeneralType) => {
  const data: any = [];
  const [selectedOption, setSelectedOption] = useState<Selected>({
    label: "",
    image: "",
  });
  const phoneOptions = useMemo(() => {
    return data.map((item: any) => {
      return {
        id: item.id,
        image: item.flagImage,
        label: item.prefixPhone,
      };
    });
  }, [data]);

  useEffect(() => {
    if (!isEmpty(value)) {
      const selectedItem = phoneOptions.find(
        (item: any) => item.label === value.indicative
      );
      if (!isEmpty(selectedItem)) {
        setSelectedOption(selectedItem);
      }
    }
  }, [value]);

  const handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <div
        className={`${styles.selectPhone} ${
          touched?.phone && errors?.phone ? styles.error : ""
        }`}
      >
        <label className={styles.labelName}>
          <span className={styles.contentInput}>{title}</span>
        </label>
        <div
          className={`${styles.phoneBox} ${
            touched?.indicative && errors?.indicative ? styles.errorIndicative : ""
          }`}
        >
          <DropDown
            className={styles.selectIndicative}
            fieldName="indicative"
            onChange={handleChange}
            options={phoneOptions}
            setFieldValue={setFieldValue}
            selected={selectedOption}
          />

          <input
            className="phone"
            id="phone"
            type="tel"
            name="phone"
            required
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onBlur={handleBlur}
            placeholder="300 234 2345"
            value={value.phone}
          />
        </div>
      </div>
      {(touched?.indicative && errors?.indicative) ||
      (touched?.phone && errors?.phone) ? (
        <ErrorMessage><>{errors.indicative || errors.phone}</></ErrorMessage>
      ) : null}
    </div>
  );
};

export default InputPhone;
