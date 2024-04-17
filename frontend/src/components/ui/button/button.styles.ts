import { css, styled } from 'styled-components';

import { IStyledButtonProps } from './button.types';

export const Button = styled.button<IStyledButtonProps>`
  ${({ theme, $variant }) => {
    return css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 16px;
      color: ${theme.palette?.white};
      background-color: transparent;
      border: none;
      border-radius: ${theme.borderRadius?.default};
      font-family: ${theme.typography?.fontFamily};
      font-style: ${theme.typography?.fontStyle?.default};
      font-size: ${theme.typography?.fontSize?.default};
      line-height: ${theme.typography?.lineHeight?.default};
      font-weight: ${theme.typography?.fontWeight?.semiBold};
      transition: background-color 0.3s ease;
      cursor: pointer;

      &:focus-visible {
        box-shadow: ${theme.palette?.grey[300]} 2px 2px 8px 0;
      }

      ${$variant === 'contained' &&
      `
      background-color: ${theme.palette?.green};
      &:hover {
        background-color: ${theme.palette?.green};
      }

      &:disabled {
        background-color: ${theme.palette?.green};
        opacity: 50%;
        &:hover {
          cursor: default;
        }
      }
      `}

      ${$variant === 'mobile' &&
      `
      background-color: ${theme.palette?.green};
      border-radius: 50%;
      width: 64px;
      height: 64px;
      padding: 0;
      font-size: 48px; 
      font-weight: ${theme.typography?.fontWeight?.normal};
    
      &:hover {
        background-color: ${theme.palette?.green};
      }

      &:disabled {
        background-color: ${theme.palette?.green};
        opacity: 50%;
        &:hover {
          cursor: default;
        }
      }
      `}

      ${$variant === 'outlined' &&
      `
      color: ${theme.palette?.grey?.borderGrey};
      border: 1px solid ${theme.palette?.grey?.borderGrey};


      &:disabled {
        color: ${theme.palette?.grey[300]};
        border: 1px solid ${theme.palette?.grey[300]};
        &:hover {
          color: ${theme.palette?.grey[300]};
          border: 1px solid ${theme.palette?.grey[300]};
          box-shadow: none;
          filter: none;
          cursor: default;
        }
      }
      `}

   ${$variant === 'destructive' &&
      `
      color: ${theme.palette?.error};
      `}
    `;
  }}
`;
