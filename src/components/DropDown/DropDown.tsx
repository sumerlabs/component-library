import { useState, useRef, useEffect } from "react";
import { DropDownProps, Selected } from "./types";
import React from "react";
import { isEmpty } from "~/common/utils";
import * as styles from "./drop-down.module.scss";

const initialSelected = {
  label: "",
  image: "",
};

export const DropDown = ({
  className,
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
    if (!isEmpty(selected.label)) {
      onOptionClicked(selected);
    }
  }, [selected]);

  const updateSelectedOption = (label: any, image: any) => {
    onOptionClicked({ label, image });
  };

  return (
    <div className={`${styles.dropDown} ${className}`}>
      <div
        className={`${styles.header} header`}
        onClick={toggling}
        data-testid={`dropdown-${className}`}
      >
        <span className={styles.label}>
          {selectedOption.label || "" || placeholder}
        </span>
        <img
          src={
            isOpen
              ? "https://sumer-s3-database.s3.us-west-2.amazonaws.com/prod/catalogue/arrowUp.png"
              : "https://sumer-s3-database.s3.us-west-2.amazonaws.com/prod/catalogue/arrow.png"
          }
          className={styles.icon}
        ></img>
      </div>
      {isOpen && (
        <div className={styles.header}>
          <div className={styles.listContainer} ref={node}>
            <ul id={id}>
              {options.length > 0 &&
                options.map(({ oId, image, label }: any) => (
                  <li
                    data-testid={`dropdown-${className}-item-${
                      label === selectedOption.label ? "selected" : ""
                    }`}
                    onClick={(event) => {
                      event.preventDefault();
                      updateSelectedOption(label, image);
                    }}
                    key={oId}
                    className={label === selectedOption.label ? styles.selected : ""}
                  >
                    {image && <img src={image} />}
                    {label}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
