import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pro1 from './Pages/Pro1.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Cliente from './Pages/Cliente.jsx';
import Afiliado from './Pages/Afiliado.jsx';


import Cadastro from './Pages/Cadastro.jsx';

import Perfil from './Pages/Perfil.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "login", element: <Login /> },
            { path: "cliente", element: <Cliente /> },
            { path: "afiliado", element: <Afiliado /> },
            { path: "pro1", element: <Pro1 /> },

            { path: "cadastro", element: <Cadastro /> },

            { path: "perfil", element: <Perfil /> },
            { path: "*", element: <PageNotFound /> }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
