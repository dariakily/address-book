export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  isFullWidth?: boolean;
  isInvalid?: boolean;
  helperText?: string;
  error?: boolean;
}

export interface IStyledInputProps extends Omit<IInputProps, 'error'> {
  $error?: boolean;
}
