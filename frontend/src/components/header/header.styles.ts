import { css, styled } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => {
    return css`
      position: fixed;
      top: 0;
      z-index: 99;
      width: 100%;
      background-color: ${theme.palette?.grey?.darkGrey};
      border: 1px solid ${theme.palette?.grey?.borderGrey};
    `;
  }}
`;

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      width: 100%;
      padding: 10px 30px;

      @media (max-width: ${theme.breakpoints?.md}) {
        padding: 8px 16px;
      }
    `;
  }}
`;

export const Title = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: ${theme.typography?.fontSize?.xl};
      color: ${theme.palette?.white};
      font-weight: ${theme.typography?.fontWeight?.bold};

      @media (max-width: ${theme.breakpoints?.md}) {
        font-size: ${theme.typography?.fontSize?.large};
      }
    `;
  }}
`;
