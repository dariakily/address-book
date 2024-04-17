import { useDialogService } from '@/services/dialog';

export const DialogsContainer = () => {
  const dialogs$ = useDialogService((state) => state.dialogs);

  return (
    <div>
      {dialogs$.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </div>
  );
};
