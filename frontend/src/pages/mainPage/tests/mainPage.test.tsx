import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen, waitFor } from '../../../../unit-tests';
import MainPage from '../mainPage';

it('renders correctly', () => {
  const tree = renderer.create(<MainPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

const mockData = [
  {
    id: '1',
    firstname: 'test1',
    lastname: 'test1',
    email: 'test1@gmail.com'
  },
  {
    id: '2',
    firstname: 'test2',
    lastname: 'test2',
    email: 'test2@gmail.com'
  },
  {
    id: '3',
    firstname: 'test3',
    lastname: 'test3',
    email: 'test3@gmail.com'
  }
];

const mockUseContactsService = jest.fn(() => ({
  getContacts: jest.fn(),
  contacts: mockData,
  isLoading: false
}));

jest.mock('@/services/contacts', () => ({
  useContactsService: () => mockUseContactsService()
}));

// Mocking useCreateModal and useEditModal hooks
jest.mock('@/components/create-modal/create-modal', () => ({
  useCreateModal: () => [jest.fn()]
}));

jest.mock('@/components/edit-modal/edit-modal', () => ({
  useEditModal: () => [jest.fn()]
}));

describe('Gallery page', () => {
  it('should render Cards', async () => {
    render(<MainPage />);
    await waitFor(() => {
      const contacts = screen.getAllByTestId('test-contact-card');
      expect(contacts).toHaveLength(3);
    });
  });
});
