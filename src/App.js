import styled from 'styled-components';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import NovaEntrada from './pages/NovoRegistroPage/NovaEntrada';
import NovaSaida from './pages/NovoRegistroPage/NovaSaida';
import GlobalStyle from './styles/globalStyle';
import UserContext from './contexts/UserContext';

export default function App() {

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ token, setToken, user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/cadastro' element={<SignUpPage />}/>
            <Route path='/home' element={<HomePage />}/>
            <Route path='/nova-entrada' element={<NovaEntrada />}/>
            <Route path='/nova-saida' element={<NovaSaida />}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}


