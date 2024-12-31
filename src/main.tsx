import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '../src/assets/scss/main.scss';
import { StateProvider } from './context/appState-context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateProvider />

    <App />
    <StateProvider />
  </StrictMode>
);
