import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';

const child = () => {
  return (
      <></>
  )
}

export default {
  title: 'Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    show: true,
    onClose: () => {},
    children: child,
    title: "Modal Title"
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Desktop = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Desktop.args = {
  show: true,
  onClose: () => {},
  children: child,
  title: "Modal Title"
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
Mobile.args = {
  show: true,
  onClose: () => {},
  children: child,
  title: "Modal Title"
};