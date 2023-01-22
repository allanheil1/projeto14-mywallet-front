import {  useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import axios from 'axios';

import { NovoRegistroStyle, HeaderStyle, Form } from './style';
import UserContext from '../../contexts/UserContext';

export default function NovaEntrada() {

    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [novaEntrada, setNovaEntrada] = useState({
      description: '',
      value: '',
      mode: 'entrada'
    });

    function RegistrarNovaEntrada(e){

      e.preventDefault();
      setIsLoading(true);
      const promise = axios.post('http://localhost:5000/register', novaEntrada, { headers: { 'Authorization': `Bearer ${token}` }});
      promise.then((res) => {
        setIsLoading(false);
        navigate('/home');
      });
      promise.catch((err) => {
        setIsLoading(false);
        const errorMsg = err.response.statusText;
        alert(`Erro: ${errorMsg}`);
      })
    }

    function OnChange(e) {
      setNovaEntrada({ ...novaEntrada, [e.target.name]: e.target.value });
    }

    return (
      <NovoRegistroStyle>
        <HeaderStyle>
          Nova Entrada
        </HeaderStyle>
        <Form onSubmit={RegistrarNovaEntrada}>
        <input 
            type='number' 
            placeholder='Valor'
            value={novaEntrada.value} name='value'
            onChange={OnChange} required disabled={isLoading}
          />
          <input 
            type='text' 
            placeholder='Descrição'
            value={novaEntrada.description} name='description'
            onChange={OnChange} required disabled={isLoading}
          />
          <button type='submit' disabled={isLoading} > Salvar Entrada </button>
        </Form>
      </NovoRegistroStyle>
    );
  }

