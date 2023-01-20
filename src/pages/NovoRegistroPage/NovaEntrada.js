import {  useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import axios from 'axios';

import { NovoRegistroStyle, Form } from './style';
import UserContext from '../../contexts/UserContext';

export default function NovaEntrada() {

    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [novaEntrada, setNovaEntrada] = useState({
      valor: '',
      descricao: ''
    });

    function RegistrarNovaEntrada(e){
      e.preventDefault();
      setIsLoading(true);
      const promise = axios.post('URLPOST', novaEntrada);
      promise.then((res) => {
        setIsLoading(false);
        setToken(res.data.token);
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
        <Form onSubmit={RegistrarNovaEntrada}>
        <input 
            type='number' placeholder='Valor'
            value={novaEntrada.valor} name='valor'
            onChange={OnChange} required disabled={isLoading}
          />
          <input 
            placeholder='Descrição'
            value={novaEntrada.descricao} name='descricao'
            onChange={OnChange} required disabled={isLoading}
          />
          <button type='submit' disabled={isLoading} > Salvar Entrada </button>
        </Form>
      </NovoRegistroStyle>
    );
  }

