export type Selected = { id?: string; label: string; image?: string };

export type DropDownProps = {
  className: string;
  fieldName: string;
  id?: string;
  onChange?: any;
  options: any;
  placeholder?: string;
  setFieldValue: any;
  selected?: Selected;
};
