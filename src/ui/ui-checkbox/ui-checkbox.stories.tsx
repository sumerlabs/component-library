import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UiCheckbox from './ui-checkbox';

export default {
  title: 'UI/UiCheckbox',
  component: UiCheckbox,
} as ComponentMeta<typeof UiCheckbox>;

const Template: ComponentStory<typeof UiCheckbox> = (args) => <UiCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
  size: 30,
  onChange: () => {},
}