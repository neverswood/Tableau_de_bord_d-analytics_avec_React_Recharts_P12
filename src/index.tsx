import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ProfilUser } from './page/ProfilUser';
import { Header } from './components/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <ProfilUser userId={12} />
  </React.StrictMode>
);
