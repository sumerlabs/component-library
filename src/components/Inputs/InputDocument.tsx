import { KeyboardEvent, useEffect, useMemo, useState } from "react";
import { InputGeneralType } from "./types";
import { Selected } from '~/components/DropDown/types';
import { DropDown } from '~/components/DropDown';
import { ErrorMessage } from '~/components/ErrorMessage';
import { isEmpty } from '~/common';
import React from "react";
import * as styles from './input.module.scss';

export type InputDocumentProps = InputGeneralType & {
  identificationTypes: string[];
};

const InputDocument = ({
  className,
  errors,
  handleChange,
  handleBlur,
  identificationTypes,
  setFieldValue,
  title,
  touched,
  value,
}: InputDocumentProps) => {
  const [selectedOption, setSelectedOption] = useState<Selected>({
    id: "",
    image: "",
    label: "",
  });

  const options = useMemo(() => {
    if (identificationTypes.length > 0) {
      return identificationTypes?.map((item: string, index: number) => {
        return {
          id: index,
          image: "",
          label: item,
        };
      });
    } else {
      return [];
    }
  }, [identificationTypes]);

  useEffect(() => {
    if (!isEmpty(value)) {
      const selectedItem: any = options.find(
        (item) => item.label === value.idType
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
  };

  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <div
        className={`${styles.selectGeneral} ${
          touched?.idNumber && errors?.idNumber ? styles.error : ""
        }`}
      >
        <label className={styles.labelName}>
          <span className={styles.contentInput}>{title}</span>
        </label>
        <div
          className={`${styles.box} ${styles.fieldBox} ${
            touched?.idType && errors?.idType ? styles.errorBox : ""
          }`}
        >
          <DropDown
            className={styles.selectDropdown}
            fieldName="idType"
            id="idType"
            options={options}
            setFieldValue={setFieldValue}
            selected={selectedOption}
            onChange={handleChange}
          />

          <input
            className="input-field"
            id="idNumber"
            type="text"
            name="idNumber"
            required
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onBlur={handleBlur}
            placeholder="1023456789"
            value={value.idNumber}
          />
        </div>
      </div>
      {(touched?.idNumber && errors?.idNumber) ||
      (touched?.idType && errors?.idType) ? (
        <ErrorMessage>{errors?.idNumber || errors?.idType}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default InputDocument;
