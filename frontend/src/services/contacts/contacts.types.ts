import { ICreateModalInput } from '@/components/create-modal/create-modal.types';
import { IEditModalInput } from '@/components/edit-modal/edit-modal.types';
import { IContact } from '@/types';

export interface IContactsService {
  contacts: IContact[];
  isLoading: boolean;
  getContacts: () => Promise<void>;
  addContact: (contactData: ICreateModalInput) => Promise<void>;
  editContact: (contactData: IEditModalInput) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;
}
