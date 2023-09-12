import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Exibição from './Site';
import PagSobre from './paginas/PagSobre';

const roteador = createBrowserRouter([
  {path: '/', element: <Exibição/>},
  {path: '/produto/:imagem/:titulo/:descricao', element: <PagSobre />},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={roteador} />
  </React.StrictMode>
);

reportWebVitals();
