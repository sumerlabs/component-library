import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UiFullScreenLoader from './ui-full-screen-loader';

export default {
  title: 'UI/UiFullScreenLoader',
  component: UiFullScreenLoader,
} as ComponentMeta<typeof UiFullScreenLoader>;

const Template: ComponentStory<typeof UiFullScreenLoader> = (args) => <UiFullScreenLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  show: false,
}