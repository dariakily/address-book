import { forwardRef } from 'react';

import * as Styled from './input.styles';
import { IInputProps } from './input.types';

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ icon, helperText, error, ...restProps }, ref) => {
    return (
      <Styled.InputWrapper>
        <Styled.Input type="text" ref={ref} $error={error} {...restProps} />
        {icon && <Styled.Image src={icon} alt="Search icon" />}
        <Styled.HelperText>{(error && helperText) || ' '}</Styled.HelperText>
      </Styled.InputWrapper>
    );
  }
);
