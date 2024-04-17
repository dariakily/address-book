export interface IModalProps extends React.PropsWithChildren {
  title: string;
  open: boolean;
  onClose: () => void;
}
