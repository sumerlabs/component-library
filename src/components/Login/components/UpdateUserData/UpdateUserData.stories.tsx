import React from 'react';
import { ComponentStory } from '@storybook/react';
import UpdateUserData from './UpdateUserData';

export default {
  title: 'UpdateUserData',
  component: UpdateUserData,
  argTypes: {

  },
};

const Template: ComponentStory<typeof UpdateUserData> = (args) => <UpdateUserData apiUrl={''} handleRegisterMessageView={() => {}} logEvent={() => {}} />;

export const UpdateUserDataDefault = Template.bind({});
UpdateUserDataDefault.args = {
};