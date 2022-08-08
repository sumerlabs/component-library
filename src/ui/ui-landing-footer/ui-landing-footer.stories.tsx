import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UiLandingFooter from './ui-landing-footer';

export default {
  title: 'UI/UiLandingFooter',
  component: UiLandingFooter,
} as ComponentMeta<typeof UiLandingFooter>;

const Template: ComponentStory<typeof UiLandingFooter> = (args) => <UiLandingFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
}
