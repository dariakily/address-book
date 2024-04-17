import { FC, memo, useCallback, useRef } from 'react';

import { useDialogService } from '@/services/dialog';

export const createModalHook = <T>(Component: (props: T) => FC) => {
  return function useDialog() {
    const idRef = useRef<string>();

    const closeDialog = useCallback(() => {
      if (idRef.current) {
        useDialogService.getState().closeDialog(idRef.current);
      }
    }, []);

    const openDialog = useCallback(
      (props?: Omit<T, 'onClose'>) => {
        idRef.current = useDialogService
          .getState()
          .openDialog(memo(Component({ ...props, onClose: closeDialog } as T)));
      },
      [closeDialog]
    );

    return [openDialog, closeDialog] as const;
  };
};
