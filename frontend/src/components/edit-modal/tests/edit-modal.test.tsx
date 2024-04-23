import renderer from 'react-test-renderer';

import { createModalHook } from '@/hooks/createModalHook';

import { fireEvent, render, screen } from '../../../../unit-tests';
import { EditModal } from '../edit-modal';
import { IEditModalProps } from '../edit-modal.types';

const testContact = {
  id: '1',
  firstname: 'test1',
  lastname: 'test1',
  email: 'test1@gmail.com'
};

it('renders correctly', () => {
  const tree = renderer
    .create(<EditModal onClose={() => console.log('test')} title="test" contact={testContact} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

const useEditModalTest = createModalHook<IEditModalProps>((props) => () => (
  <EditModal {...props} />
));

const TestComp = () => {
  const [openEditModal, closeEditModal] = useEditModalTest();
  openEditModal();
  closeEditModal();
  return <div>test</div>;
};
it('renders test correctly', () => {
  const tree = renderer.create(<TestComp />).toJSON();

  expect(tree).toMatchSnapshot();
});

describe('CreateModal', () => {
  it('should render modal', () => {
    render(<EditModal onClose={() => console.log('test')} title="test" />);

    const test = screen.getByText('LÖSCHEN');
    fireEvent.click(test);
  });
});
