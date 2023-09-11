import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PagContato from './paginas/PagContato';
import Produto from './componentes/Produto';
import Exibição from './Site';

const roteador = createBrowserRouter([
  {path: '/', element: <Exibição/>},
  {path: '/produto/:imagem/:titulo/:descricao', element: <Produto/>},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={roteador} />
  </React.StrictMode>
);

reportWebVitals();
