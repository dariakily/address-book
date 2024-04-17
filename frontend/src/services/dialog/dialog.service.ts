import { v4 } from 'uuid';
import { create } from 'zustand';

import { IDialogService } from './dialog.types';

export const useDialogService = create<IDialogService>((set, get) => ({
  dialogs: [],
  openDialog(Component) {
    const id = v4();
    const dialog = { id, Component };
    set({ dialogs: [...get().dialogs, dialog] });
    return id;
  },
  closeDialog(id: string) {
    const dialogs = get().dialogs.filter((dialog) => dialog.id !== id);
    set({ dialogs });
  },
  closeAllDialogs() {
    set({ dialogs: [] });
  }
}));
