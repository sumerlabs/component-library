import { useMemo } from "react";
import { InputGeneralType } from "./types";
import { ErrorMessage } from '~/components/ErrorMessage';
import { DropDown } from '~/components/DropDown';
import React from "react";
import * as styles from './input.module.scss';

const InputEconomicSector = ({
  title,
  touched,
  errors,
  setFieldValue,
}: InputGeneralType) => {
  const data: any[] = [];
  const businessOptions = useMemo(() => {
    return data.map((item: any) => {
      return {
        id: item.id,
        image: item.image,
        label: item.name,
      };
    });
  }, [data]);

  return (
    <div className={styles.inputContainer}>
      <div
        className={`${styles.selectEconomicSector} ${
          touched?.economicSector && errors?.economicSector ? styles.error : ""
        }`}
      >
        <label className={styles.labelName}>
          <span className={styles.contentInput}>{title}</span>
        </label>
        <div
          className={`${styles.phoneBox}  ${
            touched?.indicative && errors?.indicative ? styles.errorIndicative : ""
          }`}
        >
          <DropDown
            className={styles.selectEconomic}
            fieldName="economicSector"
            options={businessOptions}
            setFieldValue={setFieldValue}
          />
        </div>
      </div>
      {touched?.economicSector && errors?.economicSector ? (
        <ErrorMessage>{errors.economicSector}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default InputEconomicSector;
