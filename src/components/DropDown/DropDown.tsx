import React from "react";
import { useState, useRef, useEffect } from "react";
import ArrowDown from "../../assets/img/icons/ArrowDown";
import ArrowTop from "../../assets/img/icons/ArrowTop";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "./DropDown.styles";
import { DropDownProps, Selected } from "./types";


const initialSelected = {
  label: "",
  image: "",
};

export const DropDown = ({
  fieldName,
  id,
  onChange,
  options = [],
  placeholder,
  setFieldValue,
  selected = initialSelected,
}: DropDownProps) => {
  const node = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Selected>(selected);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = ({ label, image }: any) => {
    setSelectedOption({
      label,
      image,
    });
    setFieldValue(fieldName, label);
    setIsOpen(false);
  };

  const handleClick = (event: any) => {
    if (node && node.current) {
      const current: any = node.current;

      onChange && onChange(event);

      if (current.contains(event.target)) {
        return;
      }
    }

    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    if (!selected) {
      onOptionClicked(selected);
    }
  }, [selected]);

  const updateSelectedOption = (label: any, image: any) => {
    onOptionClicked({ label, image });
    setFieldValue(fieldName, label);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader className="header" onClick={toggling}>
        <span className="label">
          {selectedOption.image && <img src={selectedOption.image} />}
          {selectedOption.label || "" || placeholder}
        </span>
        <span className="icon">
          {!isOpen && <ArrowDown height="10" width="12" />}
          {isOpen && <ArrowTop height="10" width="12" />}
        </span>
      </DropDownHeader>
      {isOpen && (
        <DropDownHeader>
          <DropDownListContainer ref={node}>
            <DropDownList id={id}>
              {options.length > 0 &&
                options.map(({ oId, image, label }: any) => (
                  <ListItem
                    onClick={(event) => {
                      event.preventDefault();
                      updateSelectedOption(label, image);
                    }}
                    key={oId}
                    className={label === selectedOption.label ? "selected" : ""}
                  >
                    {image && <img src={image} />}
                    {label}
                  </ListItem>
                ))}
            </DropDownList>
          </DropDownListContainer>
        </DropDownHeader>
      )}
    </DropDownContainer>
  );
};

export default DropDown;
