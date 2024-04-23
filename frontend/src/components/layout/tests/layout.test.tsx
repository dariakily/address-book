import { act } from '@testing-library/react';
import { createRoot, Root } from 'react-dom/client';
import renderer from 'react-test-renderer';

import { App } from '@/App';

import { Layout } from '../layout';

it('renders correctly', () => {
  const tree = renderer.create(<Layout />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders App correctly', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
