import React from 'react';
import { ComponentStory } from '@storybook/react';
import RegisterInApp from '~/components/Login/components/RegisterInApp/RegisterInApp';

export default {
  title: 'RegisterInApp',
  component: RegisterInApp,
  argTypes: {
      customer: {
          firstName: 'Juan',
          lastName: 'Perez',
          prefixPhone: '+57',
          phone: '123456789',
          userId: '12312312321'
      },
      handleShowProfile: () => {},
      handleCloseSession: () => {}
  },
};

const Template: ComponentStory<typeof RegisterInApp> = (args) => <RegisterInApp />;

export const RegisterInAppDefault = Template.bind({});
RegisterInAppDefault.args = {
};