import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BorderRadius, ModalStyleProps, ModalType, Screen } from './types';

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
  color: ${({ theme }) => theme.colors.blackScale.b1};
  margin: 0 auto;
`;

export const StyledModalBody = styled.div<ModalStyleProps>`
  padding: ${({ content }) => content?.body?.padding || '0'};
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  margin-bottom: 0.9rem;
  margin-top: 5px;
`;

export const StyledModal = styled(motion.div)<ModalStyleProps>`
  box-sizing: border-box;
  background-color: ${({ content }) => content?.backgroundColor || 'white'};
  width: ${({ content }) => content?.width || '100%'};
  padding: ${({ content  }) => content?.padding || '10px'};
  height: ${({ content }) => getHeight(content?.type)};
  position: ${({ content }) => checkIfIsPopup(content?.type) ? 'fixed' : 'inherit'};
  left: ${({ content }) => content?.type ==  ModalType.LEFT ? '0' : 'auto'};
  right: ${({ content }) => content?.type ==  ModalType.RIGHT ? '0' : 'auto'};
  align-self: flex-end;
  min-height: 500px;
  overflow-y: scroll;
  @media screen and (min-width: 320px) and (max-width: 393px) {
    position: ${({ content }) => content?.type ==  ModalType.MOBILE_BOTTOM ? 'fixed' : 'initial'};
    bottom: ${({ content }) => content?.type ==  ModalType.MOBILE_BOTTOM ? '0' : 'auto'};
    border-radius: ${({ content }) => getBorderRadius(content?.type, content?.borderRadius, Screen.MOBILE)};
    width: 100%;
    height: ${({ content }) => getHeight(content?.type)};
  }
  @media screen and (min-width: 768px) and (max-width: 1824px) {
    padding: ${({ content  }) => content?.padding || '15px'};
    width: ${({ content }) => content?.width || '800px'};
    position: ${({ content }) => checkIfIsPopup(content?.type) ? 'fixed' : 'inherit'};
    border-radius: ${({ content }) => getBorderRadius(content?.type, content?.borderRadius, Screen.DESKTOP)};
    left: ${({ content }) => content?.type ==  ModalType.LEFT ? '0' : 'auto'};
    right: ${({ content }) => content?.type ==  ModalType.RIGHT ? '0' : 'auto'};
    align-self: center;
    bottom: auto;
  }
`;

export const StyledModalOverlay = styled.div<ModalStyleProps>`
  position: fixed;
  inset: 0;
  background-color: ${({ overlay }) => overlay?.backgroundColor || 'rgba(0, 0, 0, 0.75)'};
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;