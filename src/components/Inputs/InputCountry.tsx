import { useMemo } from "react";

import { CountryBox, WrapperInput } from "./Input.styles";
import { InputGeneralType } from '~/components/Inputs/types';
import { ErrorMessage } from '~/components/ErrorMessage';
import { DropDown } from '~/components/DropDown';
import React from "react";

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
    <WrapperInput>
      <div
        className={`select-country-container ${
          touched?.country && errors?.country ? "error" : ""
        }`}
      >
        <label className="label-name">
          <span className="content-input">{title}</span>
        </label>
        <CountryBox
          className={`${
            touched?.country && errors?.country ? "error-indicative" : ""
          }`}
        >
          <DropDown
            className="select-country"
            fieldName="country"
            options={countryOptions}
            setFieldValue={setFieldValue}
          />
        </CountryBox>
      </div>
      {touched?.country && errors?.country ? (
        <ErrorMessage>{errors.country?.toString()}</ErrorMessage>
      ) : null}
    </WrapperInput>
  );
};

export default InputCountry;
