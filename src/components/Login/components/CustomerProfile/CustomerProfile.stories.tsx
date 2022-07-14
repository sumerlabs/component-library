import React from 'react';
import { ComponentStory } from '@storybook/react';
import CustomerProfile from './CustomerProfile';

export default {
  title: 'CustomerProfile',
  component: CustomerProfile,
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

const Template: ComponentStory<typeof CustomerProfile> = (args) => <CustomerProfile {...args} />;

export const CustomerProfileDefault = Template.bind({});
CustomerProfileDefault.args = {
    customer: {
        firstName: 'Juan',
        lastName: 'Perez',
        prefixPhone: '+57',
        phone: '123456789',
        userId: '12312312321'
    },
    handleShowProfile: () => {},
    handleCloseSession: () => {}
};