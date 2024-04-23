import React from 'react';
import renderer from 'react-test-renderer';

import { fireEvent, render, screen, waitFor } from '../../../../unit-tests';
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

describe('Main page', () => {
  it('should render Cards', async () => {
    render(<MainPage />);
    await waitFor(() => {
      const contacts = screen.getAllByTestId('test-contact-card');
      expect(contacts).toHaveLength(3);
    });
  });

  it('should render "No data found" message when no contacts are available', async () => {
    mockUseContactsService.mockReturnValueOnce({
      getContacts: jest.fn(),
      contacts: [],
      isLoading: false
    });

    render(<MainPage />);

    const noDataMessage = screen.getByText('No data found');
    expect(noDataMessage).toBeInTheDocument();
  });

  it('should render Spinner while loading contacts', async () => {
    mockUseContactsService.mockReturnValueOnce({
      getContacts: jest.fn(),
      contacts: [],
      isLoading: true
    });

    render(<MainPage />);

    const spinner = screen.getByTestId('test-spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('should open create modal when "NEUER EINTRAG" button is clicked', async () => {
    mockUseContactsService.mockReturnValueOnce({
      getContacts: jest.fn(),
      contacts: [],
      isLoading: false
    });

    render(<MainPage />);

    const createButton = screen.getByText('NEUER EINTRAG');
    fireEvent.click(createButton);
  });

  it('should open edit modal when a contact card is clicked', async () => {
    const mockContacts = [
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
    mockUseContactsService.mockReturnValueOnce({
      getContacts: jest.fn(),
      contacts: mockContacts,
      isLoading: false
    });

    render(<MainPage />);

    const contactCards = screen.getAllByTestId('test-contact-card');
    fireEvent.click(contactCards[0]);
  });
});
