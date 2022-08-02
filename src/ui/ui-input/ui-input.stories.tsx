import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UiInput from './ui-input';

export default {
  title: 'UI/UiInput',
  component: UiInput,
} as ComponentMeta<typeof UiInput>;

const Template: ComponentStory<typeof UiInput> = (args) => <UiInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  hint: 'This is a Hint',
  label: 'This is a label',
  errorMessage: '',
  placeholder: 'This is a placeholder',
  onBlur: () => {},
  onChange: () => {},
}