import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BorderRadius, ModalStyleProps, ModalType, Screen } from './types';

const getHeight = (type: ModalType | undefined, height: string | undefined ) => {
  switch (type) {
    case ModalType.RIGHT:
    case ModalType.LEFT:
      return '100%';
    case ModalType.TOP:
      return 'auto';
    default:
      return height || '60%';
  }
}

const checkIfIsPopup = (type: ModalType | undefined) => {
  switch (type) {
    case ModalType.RIGHT:
    case ModalType.LEFT:
    case ModalType.TOP:
      return true;
    default:
      return false;
  }
}

const getBorderRadius = (type: ModalType | undefined, borderRadius: BorderRadius | undefined, screen: Screen) => {
  switch (type) {
    case ModalType.MOBILE_BOTTOM:
      return `${borderRadius?.topLeft || 0} ${borderRadius?.topRight || 0} ${screen === Screen.DESKTOP ? borderRadius?.bottomRight || 0 : 0} ${screen === Screen.DESKTOP ? borderRadius?.bottomLeft || 0 : 0}`;
    default:
        return `${borderRadius?.topLeft || 0} ${borderRadius?.topRight || 0} ${borderRadius?.bottomRight || 0} ${borderRadius?.bottomLeft || 0}`;
  }
}

export const StyledModalTitle= styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.002em;
  color: #111111;
  margin: 0 auto;
`;

export const StyledModalBody = styled.div<ModalStyleProps>`
  flex: 1;
  overflow: auto;
  padding: ${({ content }) => content?.body?.padding || "10px"};
  position: relative;
  &::-webkit-scrollbar {
    height: 0.25rem;
    width: 0.25rem;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #adadad;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #d2d2d2;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 2363px) {
    padding: ${({ content }) => content?.body?.padding || "15px"};
  }
`;

export const StyledModalHeader = styled.div<ModalStyleProps>`
  box-shadow: 2px 4px 10px rgba(53, 53, 53, 0.04),
    3px 4px 13px -4px rgba(180, 180, 180, 0.18);
  display: flex;
  font-size: 25px;
  justify-content: space-between;
  padding: ${({ content }) => content?.padding || "10px"};
  @media screen and (min-width: 768px) and (max-width: 2363px) {
    padding: ${({ content }) => content?.padding || "15px"};
  }
`;

export const StyledModal = styled(motion.div)<ModalStyleProps>`
  box-sizing: border-box;
  background-color: ${({ content }) => content?.backgroundColor || 'white'};
  width: 100%;
  max-width: ${({ content }) => content?.width || 'none'};
  height: ${({ content }) => getHeight(content?.type, content?.height)};
  position: ${({ content }) => checkIfIsPopup(content?.type) ? 'fixed' : 'inherit'};
  left: ${({ content }) => content?.type ==  ModalType.LEFT ? '0' : 'auto'};
  right: ${({ content }) => content?.type ==  ModalType.RIGHT ? '0' : 'auto'};
  align-self: center;
  overflow-y: ${({ content }) => content?.type ==  ModalType.TOP ? 'none' : 'scroll'};
  bottom: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 320px) and (max-width: 393px) {
    border-radius: ${({ content }) => getBorderRadius(content?.type, content?.borderRadius, Screen.MOBILE)};
    height: ${({ content }) => getHeight(content?.type, content?.height)};
    align-self: ${({ content }) => content?.type ==  ModalType.MOBILE_BOTTOM ? 'flex-end' : 'inherit'};
  }
  @media screen and (min-width: 768px) and (max-width: 2363px) {
    max-width: ${({ content }) => content?.width || '800px'};
    position: ${({ content }) => checkIfIsPopup(content?.type) ? 'fixed' : 'inherit'};
    border-radius: ${({ content }) => getBorderRadius(content?.type, content?.borderRadius, Screen.DESKTOP)};
    left: ${({ content }) => content?.type ==  ModalType.LEFT ? '0' : 'auto'};
    right: ${({ content }) => content?.type ==  ModalType.RIGHT ? '0' : content?.type === ModalType.TOP ? "15px":'auto'};
    top: ${({ content }) => content?.type ==  ModalType.TOP ? '110px' : content?.top || 'auto'};
  }
`;

export const StyledModalOverlay = styled.div<ModalStyleProps>`
  position: fixed;
  inset: 0;
  background-color: ${({ overlay }) => overlay?.backgroundColor || 'rgba(0, 0, 0, 0.75)'};
  z-index: ${({ overlay }) => overlay?.zIndex || '2000'};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;