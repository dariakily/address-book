import { FC } from 'react';

export interface IDialog {
  id: string;
  Component: FC;
}

export interface IDialogService {
  dialogs: IDialog[];
  openDialog(Component: FC): string;
  closeDialog(id: string): void;
  closeAllDialogs(): void;
}
