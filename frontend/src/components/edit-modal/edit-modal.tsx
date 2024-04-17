import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { createModalHook } from '@/hooks/createModalHook';
import { useContactsService } from '@/services/contacts';

import { Button, Input, Spinner } from '../ui';
import { Modal } from '../ui/modal';
import * as Styled from './edit-modal.styles';
import { IEditModalInput, IEditModalProps } from './edit-modal.types';

export const EditModal = ({ onClose, title, contact }: IEditModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { editContact, deleteContact } = useContactsService();

  const handleEdit = (data: IEditModalInput) => {
    editContact(data);
    onClose();
  };

  const {
    register,
    handleSubmit,
    formState: { isDirty }
  } = useForm<IEditModalInput>();
  const onSubmit: SubmitHandler<IEditModalInput> = (data) =>
    handleEdit({ ...data, id: contact.id });

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
              <Input
                defaultValue={contact.firstname}
                {...register('firstname', { required: true })}
                placeholder="Vorname*"
              />
              <Input
                defaultValue={contact.lastname}
                {...register('lastname', { required: true })}
                placeholder="Nachname*"
              />
            </Styled.NameFormWrapper>
            <Input
              type="email"
              defaultValue={contact.email}
              {...register('email', { required: true })}
              placeholder="E-Mail*"
            />
          </Styled.FormWrapper>
          <Styled.ModalActions>
            <Button onClick={() => deleteContact(contact.id)} variant="destructive">
              LÖSCHEN
            </Button>
            <Styled.ButtonWrapper>
              <Button variant="outlined" onClick={onClose}>
                ABBRECHEN
              </Button>
              <Button disabled={!isDirty} type="submit">
                SPEICHERN
              </Button>
            </Styled.ButtonWrapper>
          </Styled.ModalActions>
        </form>
      </Modal>
    </>
  );
};

export const useEditModal = createModalHook<IEditModalProps>((props) => () => (
  <EditModal {...props} />
));
