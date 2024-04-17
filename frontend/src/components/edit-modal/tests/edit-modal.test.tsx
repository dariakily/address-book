import renderer from 'react-test-renderer';

import { EditModal } from '../edit-modal';

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
