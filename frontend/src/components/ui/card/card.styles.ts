import { css, styled } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      width: 246px;
      height: 70px;
      flex-direction: column;
      margin: 0;
      padding: 8px 16px 12px 16px;
      background-color: ${theme.palette?.white};
      border: 1px solid ${theme.palette?.grey?.borderGrey};
      overflow: hidden;

      @media (max-width: ${theme.breakpoints?.md}) {
        padding: 8px 16px;
        border-top: 0;
        min-width: 100%;
        height: 53%;
      }
    `;
  }}
`;
