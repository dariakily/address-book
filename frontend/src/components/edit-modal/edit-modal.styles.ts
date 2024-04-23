import { css, styled } from 'styled-components';

export const Overlay = styled.div`
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

export const FormWrapper = styled.div`
  ${({ theme }) => {
    return css`
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: ${theme.gap?.medium};
    `;
  }}
`;

export const NameFormWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      gap: ${theme.gap?.medium};

      @media (max-width: ${theme.breakpoints?.md}) {
        flex-direction: column;
      }
    `;
  }}
`;

export const ModalActions = styled.div`
  ${({ theme }) => {
    return css`
      padding: 8px 20px;
      display: flex;
      justify-content: space-between;
      background: ${theme.palette?.grey?.lightGrey};
    `;
  }}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      gap: ${theme.gap?.small};
    `;
  }}
`;
