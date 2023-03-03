import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "./Modal";
import { ModalType } from "./types";

const Child = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, eget
        tincidunt nisl nunc eu nisi. Sed euismod, urna eu tincidunt consectetur,
        nisi nisl aliquam eros, eget tincidunt nisl nunc eu nisi.
      </p>
      <p>
        Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, eget
        tincidunt nisl nunc eu nisi. Sed euismod, urna eu tincidunt consectetur,
        nisi nisl aliquam eros, eget tincidunt nisl nunc eu nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, eget
        tincidunt nisl nunc eu nisi. Sed euismod, urna eu tincidunt consectetur,
        nisi nisl aliquam eros, eget tincidunt nisl nunc eu nisi.
      </p>
      <p>
        Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, eget
        tincidunt nisl nunc eu nisi. Sed euismod, urna eu tincidunt consectetur,
        nisi nisl aliquam eros, eget tincidunt nisl nunc eu nisi.
      </p>
    </>
  );
};

export default {
  title: "Modal",
  component: Modal,
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
  children: <Child />,
  title: "Desktop",
};

export const DesktopWithCustomStyles = Template.bind({});
DesktopWithCustomStyles.args = {
  show: true,
  onClose: () => {
    console.log("Close DesktopWithCustomStyles");
  },
  children: <Child />,
  title: "Desktop With Custom Styles",
  overlay: {
    styles: {
      backgroundColor: "rgba(124, 129, 219, 0.75)",
    },
  },
  content: {
    styles: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      height: "400px",
      maxWidth: "450px",
    },
  },
  header: {
    styles: {
      backgroundColor: "#333333",
      color: "#ffffff",
    },
  },
  body: {
    styles: {
      color: "red",
    },
  },
};

export const DesktopPopup = Template.bind({});
DesktopPopup.args = {
  show: true,
  onClose: () => {
    console.log("Close DesktopPopup");
  },
  children: <Child />,
  title: "Desktop Popup",
  type: ModalType.LEFT,
  content: {
    styles: {
      width: "350px",
    },
  },
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
};
Mobile.args = {
  show: true,
  onClose: () => {
    console.log("Close Mobile");
  },
  children: <Child />,
  title: "Mobile",
};

export const MobilePopup = Template.bind({});
MobilePopup.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
};
MobilePopup.args = {
  show: true,
  onClose: () => {
    console.log("Close MobilePopup");
  },
  children: <Child />,
  title: "Mobile Popup",
  type: ModalType.LEFT,
  content: {
    styles: {
      borderTopLeftRadius: "0.5rem",
      borderTopRightRadius: "0.5rem",
    },
  },
};

export const MobileButton = Template.bind({});
MobileButton.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
};
MobileButton.args = {
  show: true,
  onClose: () => {
    console.log("Close MobileButton");
  },
  children: <Child />,
  title: "Mobile Button",
  type: ModalType.MOBILE_BOTTOM,
  content: {
    styles: {
      borderTopLeftRadius: "0.5rem",
      borderTopRightRadius: "0.5rem",
    },
  },
};

export const MobileButtonInDesktopView = Template.bind({});
MobileButtonInDesktopView.args = {
  show: true,
  onClose: () => {
    console.log("Close MobileButtonInDesktopView");
  },
  children: <Child />,
  title: "Mobile Button In Desktop View",
  type: ModalType.MOBILE_BOTTOM,
};

export const ModalWithCustomCloseElement = Template.bind({});
ModalWithCustomCloseElement.args = {
  show: true,
  onClose: () => {
    console.log("Close ModalWithCustomCloseElement");
  },
  children: <Child />,
  title: "Modal with custom close element",
  closeElement: <button>Cerrar</button>,
};

export const DesktopWithTop = Template.bind({});

DesktopWithTop.args = {
  show: true,
  onClose: () => {
    console.log("Close Desktop");
  },
  children: <div>Ocurrio un error al consultar el servicio</div>,
  showHeader: false,
  title: "Desktop With Top",
  type: ModalType.TOP,
  content: {
    styles: {
      backgroundColor: '#e92c37',
      color: '#ffffff',
      width: "350px",
    },
  },
};
