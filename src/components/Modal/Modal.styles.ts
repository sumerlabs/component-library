import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ModalStyleProps, ModalType } from './types';

const getHeight = (type: ModalType | undefined) => {
  switch (type) {
      case ModalType.RIGHT:
      case ModalType.LEFT:
      return '100%';
    default:
      return '60%';
  }
}

const checkIfIsPopup = (type: ModalType | undefined) => {
  switch (type) {
    case ModalType.RIGHT:
    case ModalType.LEFT:
      return true;
    default:
      return false;
  }
}

export const StyledModalTitle= styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.002em;
  color: ${({ theme }) => theme.colors.blackScale.b1};
  margin: 0 auto;
`;

export const StyledModalBody = styled.div`
  padding-top: 10px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  margin-bottom: 0.9rem;
  margin-top: 5px;
`;

export const StyledModal = styled(motion.div)<ModalStyleProps>`
  background: white;
  width: ${({ width }) => width || '100%'};
  height: ${({ type }) => getHeight(type)};
  position: ${({ type }) => checkIfIsPopup(type) ? 'fixed' : 'inherit'};
  left: ${({ type }) => type ==  ModalType.LEFT ? '0' : 'auto'};
  right: ${({ type }) => type ==  ModalType.RIGHT ? '0' : 'auto'};
  border-top-left-radius: ${({ borderRadius }) => borderRadius?.topLeft || '0'};
  border-top-right-radius: ${({ borderRadius }) => borderRadius?.topRight || '0'};
  border-bottom-right-radius: ${({ borderRadius }) => borderRadius?.bottomLeft || '0'};
  border-bottom-left-radius: ${({ borderRadius }) => borderRadius?.bottomLeft || '0'};
  padding: 15px;
  align-self: flex-end;
  min-height: 500px;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    width: ${({ width }) => width || '700px'};
    height: ${({ type }) => getHeight(type)};
    position: ${({ type }) => checkIfIsPopup(type) ? 'fixed' : 'inherit'};
    left: ${({ type }) => type ==  ModalType.LEFT ? '0' : 'auto'};
    right: ${({ type }) => type ==  ModalType.RIGHT ? '0' : 'auto'};
    align-self: center;
    border-top-left-radius: ${({ borderRadius }) => borderRadius?.topLeft || '0'};
    border-top-right-radius: ${({ borderRadius }) => borderRadius?.topRight || '0'};
    border-bottom-right-radius: ${({ borderRadius }) => borderRadius?.bottomLeft || '0'};
    border-bottom-left-radius: ${({ borderRadius }) => borderRadius?.bottomLeft || '0'};
  }
  @media screen and (max-width: 1024px) {
    width: ${({ width }) => width || '800px'};
    align-self: center;
    border-top-left-radius: ${({ borderRadius }) => borderRadius?.topLeft || '0'};
    border-top-right-radius: ${({ borderRadius }) => borderRadius?.topRight || '0'};
    border-bottom-right-radius: ${({ borderRadius }) => borderRadius?.bottomLeft || '0'};
    border-bottom-left-radius: ${({ borderRadius }) => borderRadius?.bottomLeft || '0'};
  }
  @media screen and (max-width: 375px) {
    position: ${({ type }) => type ==  ModalType.MOBILE_BOTTOM ? 'fixed' : 'initial'};
    bottom: ${({ type }) => type ==  ModalType.MOBILE_BOTTOM ? '0' : 'auto'};
    width: 100%;
    height: ${({ type }) => getHeight(type)};
  }
  @media screen and (max-width: 320px) {
    position: ${({ type }) => type ==  ModalType.MOBILE_BOTTOM ? 'fixed' : 'initial'};
    bottom: ${({ type }) => type ==  ModalType.MOBILE_BOTTOM ? '0' : 'auto'};
    width: 100%;
    height: ${({ type }) => getHeight(type)};
  }
`;
export const StyledModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;