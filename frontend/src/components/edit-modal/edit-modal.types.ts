import { IContact } from '@/types';

export interface IEditModalProps {
  title: string;
  contact: IContact;
  onClose: () => void;
}

export interface IEditModalInput {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
}
