import { useMemo } from "react";
import { InputGeneralType } from '~/components/Inputs/types';
import { ErrorMessage } from '~/components/ErrorMessage';
import { DropDown } from '~/components/DropDown';
import React from "react";
import * as styles from './input.module.scss';

const InputCountry = ({
  title,
  touched,
  errors,
  setFieldValue,
}: InputGeneralType) => {
  const data: any[] =  [];
  const countryOptions = useMemo(() => {
    return data.map((item: any) => {
      return {
        id: item.id,
        image: item.flagImage,
        label: item.name,
      };
    });
  }, [data]);

  return (
    <div className={styles.inputContainer}>
      <div
        className={`${styles.selectCountryContainer} ${
          touched?.country && errors?.country ? styles.error : ""
        }`}
      >
        <label className={styles.labelName}>
          <span className={styles.contentInput}>{title}</span>
        </label>
        <div
          className={`${styles.countryBox} ${
            touched?.country && errors?.country ? styles.errorIndicative : ""
          }`}
        >
          <DropDown
            className={styles.selectCountry}
            fieldName="country"
            options={countryOptions}
            setFieldValue={setFieldValue}
          />
        </div>
      </div>
      {touched?.country && errors?.country ? (
        <ErrorMessage>{errors.country}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default InputCountry;
