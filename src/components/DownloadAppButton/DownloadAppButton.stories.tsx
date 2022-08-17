import React from 'react';
import { ComponentStory } from '@storybook/react';
import DownloadAppButton from '~/components/DownloadAppButton/DownloadAppButton';

export default {
  title: 'DownloadAppButton',
  component: DownloadAppButton,
  argTypes: {
  },
};

const Template: ComponentStory<typeof DownloadAppButton> = (args) => <DownloadAppButton />;

export const DownloadAppButtonDefault = Template.bind({});
DownloadAppButtonDefault.args = {
};