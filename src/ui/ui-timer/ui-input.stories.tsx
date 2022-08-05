import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UiTimer from './ui-timer';

export default {
  title: 'UI/UiTimer',
  component: UiTimer,
} as ComponentMeta<typeof UiTimer>;

const Template: ComponentStory<typeof UiTimer> = (args) => <UiTimer {...args} />;

export const Default = Template.bind({});
Default.args = {
  initFromSeconds: 60,
  showText: false,
  className: '',
  onTimerEnds: () => {},
}
