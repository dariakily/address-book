import { act } from '@testing-library/react';
import { error } from 'console';

import { useContactsService } from '../contacts.service';

jest.mock('@/config/constants', () => ({
  API_URL: 'http://example.com/api'
}));

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('useContactsService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('error when fetching', async () => {
    const error = new Error('failed to fetch');
    mockFetch.mockRejectedValueOnce(error);

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.getContacts();
    });
    state = useContactsService.getState();

    expect(state.contacts).toEqual([]);
    expect(state.isLoading).toBeFalsy();
    expect(mockFetch).toHaveBeenCalledWith('http://example.com/api/contacts');
  });

  it('error when fetching', async () => {
    const error = new Error('failed to fetch');
    mockFetch.mockRejectedValueOnce(error);

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.addContact({ firstname: 'test', lastname: 'test', email: 'dafs' });
    });
    state = useContactsService.getState();

    expect(state.contacts).toEqual([]);
    expect(state.isLoading).toBeFalsy();
  });

  it('error when fetching', async () => {
    const error = new Error('failed to fetch');
    mockFetch.mockRejectedValueOnce(error);

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.deleteContact('2');
    });
    state = useContactsService.getState();

    expect(state.contacts).toEqual([]);
    expect(state.isLoading).toBeFalsy();
  });

  it('error when fetching', async () => {
    const error = new Error('failed to fetch');
    mockFetch.mockRejectedValueOnce(error);

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.editContact({ id: '1', firstname: 'test', lastname: 'test', email: 'dafs' });
    });
    state = useContactsService.getState();

    expect(state.contacts).toEqual([]);
    expect(state.isLoading).toBeFalsy();
  });

  it('fetches contacts successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve([{ id: '1', firstname: 'test', lastname: 'test', email: 'dafs' }])
    });

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.getContacts();
    });
    state = useContactsService.getState();

    expect(state.contacts).toEqual([
      { id: '1', firstname: 'test', lastname: 'test', email: 'dafs' }
    ]);
    expect(state.isLoading).toBeFalsy();
    expect(mockFetch).toHaveBeenCalledWith('http://example.com/api/contacts');
  });

  it('add contact successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve( { id: '2', firstname: 'test', lastname: 'test', email: 'dafs' })
    });

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.addContact({ id: '2', firstname: 'test', lastname: 'test', email: 'dafs' });
    });

    state = useContactsService.getState();

    expect(state.contacts).toEqual([
      { id: '1', firstname: 'test', lastname: 'test', email: 'dafs' },
      { id: '2', firstname: 'test', lastname: 'test', email: 'dafs' }
    ]);
    expect(state.isLoading).toBeFalsy();
  });

  it('edit contact successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({ id: '1', firstname: 'testnew', lastname: 'test', email: 'dafs' })
    });

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.editContact({ id: '1', firstname: 'testnew', lastname: 'test', email: 'dafs' });
    });

    state = useContactsService.getState();

    expect(state.contacts).toEqual([
      { id: '2', firstname: 'test', lastname: 'test', email: 'dafs' },
      { id: '1', firstname: 'testnew', lastname: 'test', email: 'dafs' }
    ]);
    expect(state.isLoading).toBeFalsy();
  });

  it('deletes contacts successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({ id: '1', firstname: 'testnew', lastname: 'test', email: 'dafs' })
    });

    let state;
    await act(async () => {
      const result = useContactsService.getState();
      state = result;
      await result.deleteContact('1');
    });

    state = useContactsService.getState();

    expect(state.contacts).toEqual([
      { id: '2', firstname: 'test', lastname: 'test', email: 'dafs' }
    ]);
    expect(state.isLoading).toBeFalsy();
  });
});
