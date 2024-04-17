/* eslint-disable import/export */
import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { router } from '@/router';

import { GlobalStyle } from '../src/config/theme';
import theme from '../src/config/theme/theme';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export const TestBrowserProvider = () => {
  return <RouterProvider router={router} />;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
