import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UiButton from './ui-button';

export default {
  title: 'UI/UiButton',
  component: UiButton,
} as ComponentMeta<typeof UiButton>;

const Template: ComponentStory<typeof UiButton> = (args) => <UiButton {...args} />;
const children = 'Hola mundo';

export const Default = Template.bind({});
Default.args = {
  children: children,
  icon: <span className="icon-share" />
}

export const Rounded = Template.bind({});
Rounded.args = {
  appearance:'rounded',
  children: children,
  icon: <span className="icon-share" />
}

export const Outline = Template.bind({});
Outline.args = {
  appearance:'outline',
  children: children,
  icon: <span className="icon-share" />,
}

export const Expert = Template.bind({});
Expert.args = {
  appearance: 'expert',
  children: children,
  icon: <span className="icon-share" />
}

export const Custom = Template.bind({});
Custom.args = {
  children: children,
  icon: <span className="icon-share" />,
  styles: {
    width: '500px',
    height: '50px',
    borderRadius: '10px',
    background: '#A59BFD',
    color: '#000000'
  }
}

export const Disabled = Template.bind({});
Disabled.args = {
  children: children,
  disabled: true,
  icon: <span className="icon-share" />
}

export const Loading = Template.bind({});
Loading.args = {
  children: children,
  isLoading: true,
  icon: <span className="icon-share" />
}