import renderer from 'react-test-renderer';

import { CreateModal } from '../create-modal';

it('renders correctly', () => {
  const tree = renderer
    .create(<CreateModal onClose={() => console.log('test')} title="test" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
