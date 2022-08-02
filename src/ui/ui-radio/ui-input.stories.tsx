import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UiRadio from './ui-radio';

export default {
  title: 'UI/UiRadio',
  component: UiRadio,
} as ComponentMeta<typeof UiRadio>;

const Template: ComponentStory<typeof UiRadio> = (args) => <UiRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
  onChange: () => {},
}
