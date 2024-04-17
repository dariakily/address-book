import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { createModalHook } from '@/hooks/createModalHook';
import { useContactsService } from '@/services/contacts';

import { Button, Input, Spinner } from '../ui';
import { Modal } from '../ui/modal';
import * as Styled from './create-modal.styles';
import { ICreateModalInput, ICreateModalProps } from './create-modal.types';

export const CreateModal = ({ onClose, title }: ICreateModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { addContact } = useContactsService();

  const handleCreate = (data: ICreateModalInput) => {
    addContact(data);
    onClose();
  };

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid }
  } = useForm<ICreateModalInput>();
  const onSubmit: SubmitHandler<ICreateModalInput> = (data) => handleCreate(data);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <Styled.Overlay>
        <Spinner />
      </Styled.Overlay>
    );

  return (
    <>
      <Modal title={title} onClose={onClose} open>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styled.FormWrapper>
            <Styled.NameFormWrapper>
              <Input {...register('firstname', { required: true })} placeholder="Vorname*" />
              <Input {...register('lastname', { required: true })} placeholder="Nachname*" />
            </Styled.NameFormWrapper>
            <Input type="email" {...register('email', { required: true })} placeholder="E-Mail*" />
          </Styled.FormWrapper>
          <Styled.ModalActions>
            <Button variant="outlined" onClick={onClose}>
              ABBRECHEN
            </Button>
            <Button disabled={!isDirty || !isValid} type="submit">
              SPEICHERN
            </Button>
          </Styled.ModalActions>
        </form>
      </Modal>
    </>
  );
};

export const useCreateModal = createModalHook<ICreateModalProps>((props) => () => (
  <CreateModal {...props} />
));
