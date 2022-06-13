import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DropDown from "./DropDown";

export default {
  title: "DropDown",
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
);

export const Desktop = Template.bind({});

Desktop.args = {
  fieldName: "DropDown",
  id: "1",
  onChange: () => {
    console.log("DropDown");
  },
  options: [
    {
      image: "https://flags-countries.s3.amazonaws.com/col.jpg",
      label: "+57",
    },
    {
      image: "https://flags-countries.s3.amazonaws.com/mxc.jpg",
      label: "+52",
    },
  ],
  placeholder: "DropDown",
  setFieldValue: () => {
    console.log("DropDown");
  },
  selected: {
    image: "https://flags-countries.s3.amazonaws.com/col.jpg",
    label: "+57",
  },
};
