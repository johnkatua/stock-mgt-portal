'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { FC, ReactNode } from 'react';

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;