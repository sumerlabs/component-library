import React from 'react';
import { ComponentStory } from '@storybook/react';
import SmsValidation from './SmsValidation';

export default {
  title: 'SmsValidation',
  component: SmsValidation,
  argTypes: {

  },
};

const Template: ComponentStory<typeof SmsValidation> = (args) => <SmsValidation error={false} logEvent={() => {}} values={
    {
        one: '',
        two: '',
        three: ''
    }
} handleChange={() => {}} handleBlur={() => {}} />;

export const SmsValidationDefault = Template.bind({});
SmsValidationDefault.args = {
};