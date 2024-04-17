import * as Styled from './button.styles';
import { IButtonProps } from './button.types';

export const Button = ({ variant = 'contained', children, ...restProps }: IButtonProps) => {
  return (
    <Styled.Button $variant={variant} {...restProps}>
      {children}
    </Styled.Button>
  );
};
