import React from "react";

export enum ModalType {
  DEFAULT = "default",
  LEFT = "left",
  RIGHT = "right",
  MOBILE_BOTTOM = "mobile-bottom",
}

export type ModalProps = {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
    styles?: ModalStyleProps
}

export type ModalStyleProps = {
    borderRadius?: {
        topLeft?: string;
        topRight?: string;
        bottomLeft?: string;
        bottomRight?: string;
    };
    width?: string;
    type?: ModalType;
};