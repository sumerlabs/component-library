import { useMemo } from "react";

import { PhoneBox, WrapperInput } from "./Input.styles";
import { InputGeneralType } from "./types";
import { ErrorMessage } from '~/components/ErrorMessage';
import { DropDown } from '~/components/DropDown';
import React from "react";

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
    <WrapperInput>
      <div
        className={`select-economic-sector ${
          touched?.economicSector && errors?.economicSector ? "error" : ""
        }`}
      >
        <label className="label-name">
          <span className="content-input">{title}</span>
        </label>
        <PhoneBox
          className={`${
            touched?.indicative && errors?.indicative ? "error-indicative" : ""
          }`}
        >
          <DropDown
            className="select-economic"
            fieldName="economicSector"
            options={businessOptions}
            setFieldValue={setFieldValue}
          />
        </PhoneBox>
      </div>
      {touched?.economicSector && errors?.economicSector ? (
        <ErrorMessage><div>
          {errors.economicSector?.toString()}
        </div></ErrorMessage>
      ) : null}
    </WrapperInput>
  );
};

export default InputEconomicSector;
