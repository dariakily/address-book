import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'contained' | 'outlined' | 'destructive' | 'mobile';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  disabled?: boolean;
}

export interface IStyledButtonProps extends Omit<IButtonProps, 'variant'> {
  $variant?: ButtonVariant;
}
