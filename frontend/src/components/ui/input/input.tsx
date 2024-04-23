import { forwardRef } from 'react';

import * as Styled from './input.styles';
import { IInputProps } from './input.types';

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ helperText, error, ...restProps }, ref) => {
    return (
      <Styled.InputWrapper>
        <Styled.Input type="text" ref={ref} $error={error} {...restProps} />
        <Styled.HelperText>{(error && helperText) || ' '}</Styled.HelperText>
      </Styled.InputWrapper>
    );
  }
);
