import { css, styled } from 'styled-components';

import { Card as CardComponent } from '../ui';

export const Card = styled(CardComponent)`
  justify-content: space-between;
`;

export const CardName = styled.p`
  ${({ theme }) => {
    return css`
      color: ${theme.palette?.grey?.borderGrey};
      font-size: ${theme.typography?.fontSize?.default};
      font-weight: ${theme.typography?.fontWeight?.bold};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      @media (max-width: ${theme.breakpoints?.md}) {
        padding: 0;
      }
    `;
  }}
`;

export const CardEmail = styled.p`
  ${({ theme }) => {
    return css`
      letter-spacing: 0px;
      color: ${theme.palette?.grey?.borderGrey};
      font-size: ${theme.typography?.fontSize?.default};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      @media (max-width: ${theme.breakpoints?.md}) {
        font-size: ${theme.typography?.fontSize?.small};
      }
    `;
  }}
`;
