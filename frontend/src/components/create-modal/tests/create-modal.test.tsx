import { act } from '@testing-library/react';
import { title } from 'process';
import renderer from 'react-test-renderer';

import { createModalHook } from '@/hooks/createModalHook';

import { fireEvent, render, screen } from '../../../../unit-tests';
import { CreateModal } from '../create-modal';
import { ICreateModalProps } from '../create-modal.types';

const onCloseMock = jest.fn();

it('renders correctly', () => {
  const tree = renderer
    .create(<CreateModal onClose={() => console.log('test')} title="test" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly', async () => {
  await act(() => {
    const useCreateModalTest = createModalHook<ICreateModalProps>((props) => () => (
      <CreateModal {...props} />
    ));

    const TestComp = () => {
      const [openModal] = useCreateModalTest();
      openModal();
      return <div>test</div>;
    };
    const tree = renderer.create(<TestComp />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
