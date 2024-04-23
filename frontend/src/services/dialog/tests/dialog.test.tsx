import { act, renderHook } from '@testing-library/react-hooks';

import { useDialogService } from '../dialog.service';

describe('useDialogService', () => {
  it('closes all dialogs successfully', () => {
    const { result } = renderHook(() => useDialogService());
    const { openDialog, closeAllDialogs } = result.current;

    act(() => {
      openDialog(() => <div>Mock Dialog 1</div>);
      openDialog(() => <div>Mock Dialog 2</div>);
      closeAllDialogs();
    });

    expect(result.current.dialogs).toHaveLength(0);
  });

  it('closes dialog successfully', () => {
    const { result } = renderHook(() => useDialogService());
    const { openDialog, closeDialog } = result.current;

    act(() => {
      const dialogId = openDialog(() => <div>Mock Dialog</div>);
      closeDialog(dialogId);
    });

    expect(result.current.dialogs).toHaveLength(0);
  });

  it('opens dialog successfully', () => {
    const { result } = renderHook(() => useDialogService());
    const { openDialog } = result.current;

    act(() => {
      openDialog(() => <div>Mock Dialog</div>);
    });

    expect(result.current.dialogs).toHaveLength(1);
    expect(result.current.dialogs[0].Component).toEqual(expect.any(Function));
  });
});
