import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { DialogsContainer } from '../dialogs-container';
import { Header } from '../header';
import { Spinner } from '../ui';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <DialogsContainer />
    </>
  );
};
