import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';
import { ModalType } from './types';

const child = () => {
  return (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, urna eu tincidunt consectetur,
          nisi nisl aliquam eros, eget tincidunt nisl nunc eu nisi.
          Sed euismod, urna eu tincidunt consectetur, nisi nisl
          aliquam eros, eget tincidunt nisl nunc eu nisi.
        </p>
        <p>
          Sed euismod, urna eu tincidunt consectetur, nisi nisl
          aliquam eros, eget tincidunt nisl nunc eu nisi.
          Sed euismod, urna eu tincidunt consectetur, nisi nisl
          aliquam eros, eget tincidunt nisl nunc eu nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, urna eu tincidunt consectetur,
          nisi nisl aliquam eros, eget tincidunt nisl nunc eu nisi.
          Sed euismod, urna eu tincidunt consectetur, nisi nisl
          aliquam eros, eget tincidunt nisl nunc eu nisi.
        </p>
        <p>
          Sed euismod, urna eu tincidunt consectetur, nisi nisl
          aliquam eros, eget tincidunt nisl nunc eu nisi.
          Sed euismod, urna eu tincidunt consectetur, nisi nisl
          aliquam eros, eget tincidunt nisl nunc eu nisi.
        </p>
      </>
  )
}

export default {
  title: 'Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    show: true,
    onClose: () => {},
    children: child,
    title: "Modal Title"
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Desktop = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Desktop.args = {
  show: true,
  onClose: () => {},
  children: child,
  title: "Modal Title"
};

export const DesktopWithCustomStyles = Template.bind({});
DesktopWithCustomStyles.args = {
  show: true,
  onClose: () => {},
  children: child,
  title: "Modal Title",
  styles: {
    width: "200px",
    borderRadius: {
      bottomLeft: "0",
      bottomRight: "0",
      topLeft: "10px",
      topRight: "10px"
    }
  }
};

export const DesktopPopup = Template.bind({});
DesktopPopup.args = {
  show: true,
  onClose: () => {},
  children: child,
  title: "Modal Title",
  styles: {
    width: "350px",
    borderRadius: {
      bottomLeft: "0",
      bottomRight: "0",
      topLeft: "10px",
      topRight: "10px"
    },
    type: ModalType.LEFT
  }
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
Mobile.args = {
  show: true,
  onClose: () => {},
  children: child,
  title: "Modal Title"
};

export const MobilePopup = Template.bind({});
MobilePopup.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
MobilePopup.args = {
  show: true,
  onClose: () => {},
  children: child,
  title: "Modal Title",
  styles: {
    borderRadius: {
      bottomLeft: "0",
      bottomRight: "0",
      topLeft: "10px",
      topRight: "10px"
    },
    type: ModalType.LEFT
  }
};

export const MobileButton = Template.bind({});
MobileButton.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
MobileButton.args = {
  show: true,
  onClose: () => {},
  children: child,
  title: "Modal Title",
  styles: {
    borderRadius: {
      bottomLeft: "0",
      bottomRight: "0",
      topLeft: "10px",
      topRight: "10px"
    },
    type: ModalType.MOBILE_BOTTOM
  }
};

export const MobileButtonInDektopView = Template.bind({});
MobileButtonInDektopView.args = {
  show: true,
  onClose: () => {},
  children: child,
  title: "Modal Title",
  styles: {
    borderRadius: {
      bottomLeft: "10px",
      bottomRight: "10px",
      topLeft: "10px",
      topRight: "10px"
    },
    type: ModalType.MOBILE_BOTTOM
  }
};