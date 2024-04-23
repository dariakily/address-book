import { css, styled } from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      row-gap: ${theme.gap?.small};
      min-width: 536px;
      margin: 10px;
      padding: 0px;
      background-color: ${theme.palette?.white};
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

      @media (max-width: ${theme.breakpoints?.md}) {
        min-width: 400px;
      }
    `;
  }}
`;

export const ModalHeader = styled.div`
  position: relative;
  padding: 10px 20px 0px 20px;
  display: flex;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  ${({ theme }) => {
    return css`
      color: ${theme.palette?.grey?.borderGrey};
      font-size: ${theme.typography?.fontSize?.large};

      @media (max-width: ${theme.breakpoints?.md}) {
        font-size: ${theme.typography?.fontSize?.medium};
        line-height: ${theme.typography?.lineHeight?.md};
      }
    `;
  }}
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
