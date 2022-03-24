import React from 'react';
import { ComponentStory } from '@storybook/react';
import Pagination from './pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
      totalPageCount: 15,
      currentPage: 1,
      onPageChange: () => {},
  },
};

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
    totalPageCount: 15,
    currentPage: 1,
    onPageChange: () => {},
};

export const WithCustomControls = Template.bind({});
WithCustomControls.args = {
    totalPageCount: 15,
    currentPage: 1,
    previousLabel: 'Previous',
    nextLabel: 'Next',
    onPageChange: () => {},
};

export const WithHtmlControls = Template.bind({});
WithHtmlControls.args = {
    totalPageCount: 15,
    currentPage: 1,
    previousLabel: <button>Previous</button>,
    nextLabel: <button>Next</button>,
    onPageChange: () => {},
};

export const WithMoreSiblings = Template.bind({});
WithMoreSiblings.args = {
    totalPageCount: 15,
    currentPage: 10,
    siblingCount: 3,
    onPageChange: () => {},
};

