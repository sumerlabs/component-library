import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UiLandingHeader from './ui-landing-header';

export default {
  title: 'UI/UiLandingHeader',
  component: UiLandingHeader,
} as ComponentMeta<typeof UiLandingHeader>;

const Template: ComponentStory<typeof UiLandingHeader> = (args) => <UiLandingHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  onLoginClick: () => {},
}
