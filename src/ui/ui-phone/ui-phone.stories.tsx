import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UiPhone from './ui-phone';

export default {
  title: 'UI/UiPhone',
  component: UiPhone,
} as ComponentMeta<typeof UiPhone>;

const Template: ComponentStory<typeof UiPhone> = (args) => <UiPhone {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [{ label: '1', value: '1', flagUrl: '' }],
  hasError: false,
  prefixValue: '',
  phoneValue: '',
  errorMessage: '',
  hint: '',
  onBlur: () => {},
  onChange: () => {},
  onFocusInput: () => {},
}