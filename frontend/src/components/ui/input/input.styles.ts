import { css, styled } from 'styled-components';

import { IStyledInputProps } from './input.types';

export const InputWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  ${({ theme }) => {
    return css`
      position: absolute;
      right: 16px;
      top: 50%;
      z-index: 9;
      transform: translateY(-50%);
      display: block;
      width: 20px;
      height: 20px;

      @media (max-width: ${theme.breakpoints.md}) {
        width: 16px;
        height: 16px;
      }
    `;
  }}
`;

export const Input = styled.input<IStyledInputProps>`
  ${({ theme, $error }) => {
    const { palette, borderRadius } = theme;
    const { fontFamily, fontStyle, fontWeight, fontSize, lineHeight } = theme.typography;

    return css`
      min-width: 200px;
      width: 100%;
      padding: 12px 46px 12px 16px;
      border: 1px solid ${palette.grey.borderGrey};
      border-radius: ${borderRadius.default};
      color: ${palette.grey.borderGrey};
      background-color: ${palette.white};
      font-family: ${fontFamily};
      font-size: ${fontSize.default};
      font-style: ${fontStyle.inherit};
      font-weight: ${fontWeight.normal};
      overflow: hidden;
      transition: 0.3s;

      &::placeholder {
        color: ${palette.grey.borderGrey};
        font-family: ${fontFamily};
        font-style: ${fontStyle.default};
        font-weight: ${fontWeight.semiBold};
        font-size: ${fontSize.default};
        opacity: 1;
      }

      ${$error &&
      `
      border: 1px solid ${palette.error};
      `}

      @media (max-width: ${theme.breakpoints.md}) {
        padding: 8px 22px 8px 12px;
      }
    `;
  }}
`;

export const HelperText = styled.p`
  ${({ theme }) => {
    const { fontFamily, fontStyle, fontWeight, fontSize } = theme.typography;

    return css`
      position: absolute;
      left: 0;
      bottom: -20px;
      padding: 0;
      font-family: ${fontFamily};
      font-size: ${fontSize.small};
      font-style: ${fontStyle.default};
      font-weight: ${fontWeight.normal};
      color: ${theme.palette.error};
    `;
  }}
`;
