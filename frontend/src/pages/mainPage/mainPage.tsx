import { useEffect } from 'react';

import { ContactCard } from '@/components/contact-card';
import { useCreateModal } from '@/components/create-modal/create-modal';
import { useEditModal } from '@/components/edit-modal/edit-modal';
import { Button, Spinner } from '@/components/ui';
import { useContactsService } from '@/services/contacts';
import { IContact } from '@/types';

import * as Styled from './mainPage.styles';

const MainPage = () => {
  const { getContacts, contacts, isLoading } = useContactsService();
  const [openModal] = useCreateModal();
  const [openEditModal] = useEditModal();

  const handleOpenModal = () => {
    openModal({ title: 'Neuer Eintrag' });
  };

  const handleOpenEditModal = (contact: IContact) => {
    openEditModal({ title: 'Eintrag bearbeiten', contact: contact });
  };

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Styled.Container>
        <Styled.ButtonWrapper>
          <Button onClick={handleOpenModal}>NEUER EINTRAG</Button>
        </Styled.ButtonWrapper>

        <Styled.MobileButtonWrapper>
          <Button onClick={handleOpenModal} variant="mobile">
            +
          </Button>
        </Styled.MobileButtonWrapper>

        <Styled.ImageWrapper>
          {contacts.length ? (
            contacts.map((contact) => (
              <Styled.CardButton onClick={() => handleOpenEditModal(contact)} key={contact.id}>
                <ContactCard data={contact} />
              </Styled.CardButton>
            ))
          ) : (
            <Styled.NoData>No data found</Styled.NoData>
          )}
        </Styled.ImageWrapper>
      </Styled.Container>
    </>
  );
};

export default MainPage;
