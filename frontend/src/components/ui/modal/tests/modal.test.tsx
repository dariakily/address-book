import { fireEvent, render, screen } from '../../../../../unit-tests';
import { Modal } from '../modal';

const onCloseMock = jest.fn();

describe('Modal', () => {
  it('should render modal', () => {
    render(
      <Modal title="Test Modal" open onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByTestId('test-modal')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('should not render when closed', () => {
    render(
      <Modal title="Test Modal" open={false} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.queryByTestId('test-modal')).toBeNull();
  });
});
