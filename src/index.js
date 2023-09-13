import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Exibição from './Site';
import PagSobre from './paginas/PagSobre';
import PagCategoria from './paginas/PagCategoria';

const roteador = createBrowserRouter([
  {path: '/', element: <Exibição/>},
  {path: '/produto/:imagem/:titulo/:descricao', element: <PagSobre />},
  {path: '/categoria/:categoria', element: <PagCategoria /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={roteador} />
  </React.StrictMode>
);

reportWebVitals();
