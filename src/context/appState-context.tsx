import { PropsWithChildren } from 'react';
import { createCtx } from './context-helper';

const [appState, Provider] = createCtx();

function StateProvider({ children }: PropsWithChildren<object>) {
  const value = {};

  return <Provider value={value}>{children}</Provider>;
}

export { StateProvider, appState };
