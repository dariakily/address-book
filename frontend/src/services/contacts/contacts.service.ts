import { create } from 'zustand';

import { API_URL } from '@/config/constants';

import { IContactsService } from './contacts.types';

export const useContactsService = create<IContactsService>((set, get) => ({
  contacts: [],
  isLoading: false,

  async getContacts() {
    try {
      set({ isLoading: true });
      const response = await fetch(`${API_URL}/contacts`);
      if (response.ok) {
        const data = await response.json();
        const contacts = data;
        set({ contacts });
      }
    } catch {
      set({ contacts: [] });
    } finally {
      set({ isLoading: false });
    }
  },

  async addContact(contactData) {
    try {
      set({ isLoading: true });
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
      });
      if (response.ok) {
        const data = await response.json();
        set({ contacts: [...get().contacts, data] });
      }
    } catch (error) {
      console.error('Error adding contact:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  async editContact(contactData) {
    try {
      set({ isLoading: true });
      const response = await fetch(`${API_URL}/contacts/${contactData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
      });
      if (response.ok) {
        const data = await response.json();
        set({
          contacts: [
            ...get().contacts.filter((contact) => contact.id !== data.id),
            data
          ]
        });
      }
    } catch (error) {
      console.error('Error editing contact:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  async deleteContact(id) {
    try {
      set({ isLoading: true });
      const response = await fetch(`${API_URL}/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        set({
          contacts: [...get().contacts.filter((contact) => contact.id !== id)]
        });
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    } finally {
      set({ isLoading: false });
    }
  }
}));
