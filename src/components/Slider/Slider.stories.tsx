import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Slider';
import ArrowLeft from '../../assets/img/icons/AndroidIcon';
import ArrowRight from '../../assets/img/icons/AppleIcon';


export default {
  title: 'Slider',
  component: Slider,
  argTypes: {
    hideArrows: false,
    dragMode: false
  },
};

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Slide = Template.bind({});

export const SlideArrowIcons = Template.bind({});
SlideArrowIcons.args = {
    hideArrows: false,
    iconBackArrow: <ArrowLeft width={20} height={20} />,
    iconNextArrow: <ArrowRight width={20} height={20} />,
};

export const HiddenArrows = Template.bind({});
HiddenArrows.args = {
    hideArrows: true
};

export const HiddenDots = Template.bind({});
HiddenDots.args = {
    hideDots: true
};

export const DragMode = Template.bind({});
DragMode.args = {
    dragMode: true
};