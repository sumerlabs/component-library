import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UiButton from './ui-button';

export default {
  title: 'UI/UiButton',
  component: UiButton,
} as ComponentMeta<typeof UiButton>;

const Template: ComponentStory<typeof UiButton> = (args) => <UiButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Text',
  isExpert: false,
  isDisabled: false,
  isSecondary: false,
  isLoading: false,
  iconRight: <span className="icon-share" />,
  onClick: () => {},
}