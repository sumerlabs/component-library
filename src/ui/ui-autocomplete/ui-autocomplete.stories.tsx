import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UiAutocomplete from './ui-autocomplete';

export default {
  title: 'UI/UiAutocomplete',
  component: UiAutocomplete,
} as ComponentMeta<typeof UiAutocomplete>;

const Template: ComponentStory<typeof UiAutocomplete> = (args) => <UiAutocomplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'This is  a label',
  value: '',
  hasError: false,
  errorMessage: '',
  placeholder: 'This is a placeholder',
  hint: 'This is a hint',
  options: [
    { label: 'Label 1', value: '1' },
    { label: 'Label 2', value: '2' },
    { label: 'Label 3', value: '3' },
    { label: 'Label 4', value: '4' },
    { label: 'Label 5', value: '5' },
    { label: 'Label 6', value: '6' },
  ],
  onChange: () => {},
  onBlur: () => {},
}