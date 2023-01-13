import { KeyboardEvent, useEffect, useMemo, useState } from "react";

import { Box, WrapperInput } from "./Input.styles";
import { InputGeneralType } from "./types";
import { Selected } from '~/components/DropDown/types';
import { DropDown } from '~/components/DropDown';
import { ErrorMessage } from '~/components/ErrorMessage';
import { isEmpty } from '~/common';
import React from "react";

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
    <WrapperInput className={className}>
      <div
        className={`select-general ${
          touched?.idNumber && errors?.idNumber ? "error" : ""
        }`}
      >
        <label className="label-name">
          <span className="content-input">{title}</span>
        </label>
        <Box
          className={`field-box ${
            touched?.idType && errors?.idType ? "error-box" : ""
          }`}
        >
          <DropDown
            className="select-dropdown"
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
        </Box>
      </div>
      {(touched?.idNumber && errors?.idNumber) ||
      (touched?.idType && errors?.idType) ? (
        <ErrorMessage>{errors?.idNumber?.toString() || errors?.idType?.toString()}</ErrorMessage>
      ) : null}
    </WrapperInput>
  );
};

export default InputDocument;
