import { KeyboardEvent, useEffect, useMemo, useState } from "react";

import { PhoneBox, WrapperInput } from "./Input.styles";
import { InputGeneralType } from "./types";
import { Selected } from '~/components/DropDown/types';
import { DropDown } from '~/components/DropDown';
import { ErrorMessage } from '~/components/ErrorMessage';
import React from "react";
import { isEmpty } from '~/common';

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
    <WrapperInput className={className}>
      <div
        className={`select-phone ${
          touched?.phone && errors?.phone ? "error" : ""
        }`}
      >
        <label className="label-name">
          <span className="content-input">{title}</span>
        </label>
        <PhoneBox
          className={`phone-box ${
            touched?.indicative && errors?.indicative ? "error-indicative" : ""
          }`}
        >
          <DropDown
            className="select-indicative"
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
        </PhoneBox>
      </div>
      {(touched?.indicative && errors?.indicative) ||
      (touched?.phone && errors?.phone) ? (
        <ErrorMessage>{errors.indicative?.toString() || errors.phone?.toString()}</ErrorMessage>
      ) : null}
    </WrapperInput>
  );
};

export default InputPhone;
