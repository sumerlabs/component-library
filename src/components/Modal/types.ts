import React, { ReactElement } from "react";

export enum ModalType {
  DEFAULT = "default",
  LEFT = "left",
  RIGHT = "right",
  MOBILE_BOTTOM = "mobile-bottom",
  TOP = "top"
}

export enum Screen {
    MOBILE = "mobile",
    DESKTOP = "desktop"
}

export type ModalProps = {
    show: boolean;
    showHeader?: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
    styles?: ModalStyleProps;
    element?: Element;
    closeElement?: React.ReactNode;
    className?: string;
}

export type BorderRadius = {
    topLeft?: string;
    topRight?: string;
    bottomLeft?: string;
    bottomRight?: string;
}

export type ModalContent = {
    borderRadius?: BorderRadius;
    width?: string;
    height?: string;
    top?: string;
    type?: ModalType;
    padding?: string;
    body?: Body
    backgroundColor?: string;
}

export type Overlay = {
    backgroundColor?: string;
}

export type Body = {
    borderRadius?: BorderRadius;
    padding?: string;
    backgroundColor?: string;
}

export type ModalStyleProps = {
    content?: ModalContent;
    overlay?: Overlay;
};