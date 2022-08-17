import React from 'react';
import { ComponentStory } from '@storybook/react';
import GetCodeByEmail from './GetCodeByEmail';

export default {
  title: 'GetCodeByEmail',
  component: GetCodeByEmail
};

const Template: ComponentStory<typeof GetCodeByEmail> = (args) => <GetCodeByEmail {...args} />;

export const GetCodeByEmailDefault = Template.bind({});
GetCodeByEmailDefault.args = {
    handleStepChange: () => {},
    apiKey: '78cd3ff2bd5c9f661ba1d6a0a98fcab9',
    apiUrl: 'https://services.dev.sumerlabs.com',
    logEvent: () => {},
};