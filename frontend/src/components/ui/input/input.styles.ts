import { css, styled } from 'styled-components';

import { IStyledInputProps } from './input.types';

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input<IStyledInputProps>`
  ${({ theme, $error }) => {
    return css`
      min-width: 200px;
      width: 100%;
      padding: 12px 46px 12px 16px;
      border: 1px solid ${theme.palette?.grey?.borderGrey};
      border-radius: ${theme.borderRadius?.default};
      color: ${theme.palette?.grey?.borderGrey};
      background-color: ${theme.palette?.white};
      font-family: ${theme.typography?.fontFamily};
      font-size: ${theme.typography?.fontSize?.default};
      font-style: ${theme.typography?.fontStyle?.inherit};
      font-weight: ${theme.typography?.fontWeight?.normal};
      overflow: hidden;
      transition: 0.3s;

      &::placeholder {
        color: ${theme.palette?.grey?.borderGrey};
        font-family: ${theme.typography?.fontFamily};
        font-style: ${theme.typography?.fontStyle?.default};
        font-weight: ${theme.typography?.fontWeight?.semiBold};
        font-size: ${theme.typography?.fontSize?.default};
        opacity: 1;
      }

      @media (max-width: ${theme.breakpoints?.md}) {
        padding: 8px 22px 8px 12px;
      }
    `;
  }}
`;

export const HelperText = styled.p`
  ${({ theme }) => {
    return css`
      position: absolute;
      left: 0;
      bottom: -20px;
      padding: 0;
      font-family: ${theme.typography?.fontFamily};
      font-size: ${theme.typography?.fontSize?.small};
      font-style: ${theme.typography?.fontStyle?.default};
      font-weight: ${theme.typography?.fontWeight?.normal};
      color: ${theme.palette?.error};
    `;
  }}
`;
