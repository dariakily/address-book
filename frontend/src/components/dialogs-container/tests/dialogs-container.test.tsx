import { render } from '@testing-library/react';
import React from 'react';

import { useDialogService } from '@/services/dialog';

import { DialogsContainer } from '../dialogs-container';

// Mock the useDialogService hook
jest.mock('@/services/dialog', () => ({
  useDialogService: jest.fn()
}));

describe('DialogsContainer', () => {
  it('renders dialogs correctly', () => {
    // Mock the dialogs$ observable with some mock data
    const mockDialogs = [
      { id: 1, Component: () => <div>Dialog 1</div> },
      { id: 2, Component: () => <div>Dialog 2</div> }
    ];
    useDialogService.mockReturnValue(mockDialogs);

    // Render the component
    const { getByText } = render(<DialogsContainer />);

    // Check if each dialog component is rendered
    expect(getByText('Dialog 1')).toBeInTheDocument();
    expect(getByText('Dialog 2')).toBeInTheDocument();
  });

  it('renders no dialogs when dialogs$ is empty', () => {
    // Mock an empty dialogs$ observable
    useDialogService.mockReturnValue([]);

    // Render the component
    const { container } = render(<DialogsContainer />);

    // Check if no dialogs are rendered
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
