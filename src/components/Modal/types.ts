import React, { CSSProperties, ReactElement } from "react";

export enum ModalType {
  DEFAULT = "default",
  LEFT = "left",
  RIGHT = "right",
  MOBILE_BOTTOM = "mobileBottom",
  TOP = "top",
}

export type ModalContextProps = {
  show: boolean;
  children: React.ReactNode;
  type?: ModalType;
  element?: Element;
  showHeader?: boolean;
  title?: string;
  closeElement?: React.ReactNode;

  className?: string;
  styles?: CSSProperties;

  overlay?: {
    className?: string;
    styles?: CSSProperties;
  };
  content?: {
    className?: string;
    styles?: CSSProperties;
  };
  header?: {
    className?: string;
    styles?: CSSProperties;
  };
  body?: {
    className?: string;
    styles?: CSSProperties;
  };
  onClose?: () => void;
};
