import styled from 'styled-components';
import { motion } from 'framer-motion';

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
`;

export const StyledModal = styled(motion.div)`
  background: white;
  width: 100%;
  height: 60%;
  border-radius: 15px 15px 0 0;
  padding: 15px;
  align-self: flex-end;
  min-height: 500px;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    width: 700px;
    align-self: center;
    border-radius: 20px;
  }
  @media screen and (min-width: 1024px) {
    width: 800px;
    align-self: center;
    border-radius: 20px;
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