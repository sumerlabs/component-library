import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'UI/UiIcons',
} as ComponentMeta<typeof React.Component>;

const Template: ComponentStory<typeof React.Component> = (args) => (
  <div className="icons" style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gridAutoRows: '50px',
    fontSize: '30px'
  }}>
    <div className="icon-trash">icon-trash</div>
    <div className="icon-minus">icon-minus</div>
    <div className="icon-plus-2">icon-plus-2</div>
    <div className="icon-headset-mic">icon-headset-mic</div>
    <div className="icon-bubble-chat">icon-bubble-chat</div>
    <div className="icon-share">icon-share</div>
    <div className="icon-close">icon-close</div>
    <div className="icon-check">icon-check</div>
    <div className="icon-user">icon-user</div>
    <div className="icon-plus">icon-plus</div>
    <div className="icon-arrow-3">icon-arrow-3</div>
    <div className="icon-arrow-2">icon-arrow-2</div>
    <div className="icon-arrow">icon-arrow</div>
    <div className="icon-hide-password">icon-hide-password</div>
    <div className="icon-show-password">icon-show-password</div>
    <div className="icon-squares">icon-squares</div>
    <div className="icon-bullets-list">icon-bullets-list</div>
    <div className="icon-search">icon-search</div>
    <div className="icon-circle-check">icon-circle-check</div>
    <div className="icon-circle-exclamation">icon-circle-exclamation</div>
    <div className="icon-burger-menu">icon-burger-menu</div>
    <div className="icon-shopping-cart">icon-shopping-cart</div>
    <div className="icon-cash">icon-cash</div>
    <div className="icon-arrows-left-right">icon-arrows-left-right</div>
    <div className="icon-refresh">icon-refresh</div>
    <div className="icon-credit-card">icon-credit-card</div>
    <div className="icon-trophy">icon-trophy</div>
    <div className="icon-book-open">icon-book-open</div>
    <div className="icon-pencil">icon-pencil</div>
    <div className="icon-question-support">icon-question-support</div>
    <div className="icon-android">icon-android</div>
    <div className="icon-apple">icon-apple</div>
    <div className="icon-four-points">icon-four-points</div>
    <div className="icon-youtube">icon-youtube</div>
    <div className="icon-linked-in">icon-linked-in</div>
    <div className="icon-tiktok">icon-tiktok</div>
    <div className="icon-instagram">icon-instagram</div>
    <div className="icon-facebook">icon-facebook</div>
    <div className="icon-trophy">icon-trophy</div>
    <div className="icon-book-open">icon-book-open</div>
    <div className="icon-pencil">icon-pencil</div>
  </div>
);

export const Default = Template.bind({});