import { css, styled } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: start;
      row-gap: ${theme.gap?.large};
      max-width: ${theme.breakpoints?.xl};
      width: 100%;
      padding: 80px 0;
      margin: 0 10px;

      @media (max-width: ${theme.breakpoints?.md}) {
        padding: 0;
        margin: 0;
      }
    `;
  }}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: stretch;
      gap: ${theme.gap?.medium};
      width: 100%;

      @media (max-width: ${theme.breakpoints?.md}) {
        flex-direction: column;
        gap: 0;
      }
    `;
  }}
`;

export const NoData = styled.p`
  ${({ theme }) => {
    return css`
      color: ${theme.palette?.secondary?.main};
      font-size: ${theme.typography.fontSize?.large};
      font-size: ${theme.typography.fontWeight?.bold};
      line-height: ${theme.typography.lineHeight?.lg};
    `;
  }}
`;

export const CardButton = styled.button`
  border: 0;
  cursor: pointer;
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => {
    return css`
      @media (max-width: ${theme.breakpoints?.md}) {
        display: none;
      }
    `;
  }}
`;

export const MobileButtonWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: none;
      @media (max-width: ${theme.breakpoints?.md}) {
        display: block;
        position: fixed;
        bottom: 40px;
        right: 40px;
      }
    `;
  }}
`;
