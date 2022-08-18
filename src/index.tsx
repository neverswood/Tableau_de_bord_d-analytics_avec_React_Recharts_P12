import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { ProfilUser } from './page/ProfilUser';
import { Header } from './components/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <ProfilUser />
  </React.StrictMode>
);
