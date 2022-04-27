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
  component: Modal
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Desktop = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Desktop.args = {
  show: true,
  onClose: () => {
    console.log("Close Desktop");
  },
  children: child,
  title: "Desktop",
  styles: {
    content: {
      borderRadius: {
        bottomLeft: "10px",
        bottomRight: "10px",
        topLeft: "10px",
        topRight: "10px"
      }
    }
  }
};

export const DesktopWithCustomStyles = Template.bind({});
DesktopWithCustomStyles.args = {
  show: true,
  onClose: () => {
    console.log("Close DesktopWithCustomStyles");
  },
  children: child,
  title: "Desktop With Custom Styles",
  styles: {
    content: {
      width: "400px",
      borderRadius: {
        bottomLeft: "0",
        bottomRight: "0",
        topLeft: "10px",
        topRight: "10px"
      }
    }
  }
};

export const DesktopPopup = Template.bind({});
DesktopPopup.args = {
  show: true,
  onClose: () => {
    console.log("Close DesktopPopup");
  },
  children: child,
  title: "Desktop Popup",
  styles: {
    content: {
      width: "350px",
      borderRadius: {
        bottomLeft: "0",
        bottomRight: "0",
        topLeft: "10px",
        topRight: "10px"
      },
      type: ModalType.LEFT
    }
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
  onClose: () => {
    console.log("Close Mobile");
  },
  children: child,
  title: "Mobile"
};

export const MobilePopup = Template.bind({});
MobilePopup.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
MobilePopup.args = {
  show: true,
  onClose: () => {
    console.log("Close MobilePopup");
  },
  children: child,
  title: "Mobile Popup",
  styles: {
    content: {
      borderRadius: {
        bottomLeft: "0",
        bottomRight: "0",
        topLeft: "10px",
        topRight: "10px"
      },
      type: ModalType.LEFT
    }
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
  onClose: () => {
    console.log("Close MobileButton");
  },
  children: child,
  title: "Mobile Button",
  styles: {
    content: {
      borderRadius: {
        bottomLeft: "0",
        bottomRight: "0",
        topLeft: "10px",
        topRight: "10px"
      },
      type: ModalType.MOBILE_BOTTOM
    }
  }
};

export const MobileButtonInDesktopView = Template.bind({});
MobileButtonInDesktopView.args = {
  show: true,
  onClose: () => {
    console.log("Close MobileButtonInDesktopView");
  },
  children: child,
  title: "Mobile Button In Desktop View",
  styles: {
    content: {
      borderRadius: {
        bottomLeft: "10px",
        bottomRight: "10px",
        topLeft: "10px",
        topRight: "10px"
      },
      type: ModalType.MOBILE_BOTTOM
    }
  }
};

export const ModalWithCustomCloseElement = Template.bind({});
ModalWithCustomCloseElement.args = {
  show: true,
  onClose: () => {
    console.log("Close ModalWithCustomCloseElement");
  },
  children: child,
  title: "Modal with custom close element",
  styles: {
    content: {
      borderRadius: {
        bottomLeft: "10px",
        bottomRight: "10px",
        topLeft: "10px",
        topRight: "10px"
      }
    }
  },
  closeElement: <div>Custom close element</div>
};