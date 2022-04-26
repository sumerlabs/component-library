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
Slide.args = {
    hideArrows: false,
    dragMode: false,
};

export const SlideArrowIcons = Template.bind({});
SlideArrowIcons.args = {
    hideArrows: false,
    dragMode: false,
    iconBackArrow: <ArrowLeft width={20} height={20} />,
    iconNextArrow: <ArrowRight width={20} height={20} />,
};