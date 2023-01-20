import { useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import axios from 'axios';

import { NovoRegistroStyle, HeaderStyle, Form } from './style';
import UserContext from '../../contexts/UserContext';

export default function NovaSaida() {

    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [novaSaida, setNovaSaida] = useState({
      valor: '',
      descricao: ''
    });

    function RegistrarNovaSaida(e){
      e.preventDefault();
      setIsLoading(true);
      const promise = axios.post('URLPOST', novaSaida);
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
      setNovaSaida({ ...novaSaida, [e.target.name]: e.target.value });
    }

    return (
      <NovoRegistroStyle>
        <HeaderStyle>
          Nova Saida
        </HeaderStyle>
        <Form onSubmit={RegistrarNovaSaida}>
        <input 
            type='number' placeholder='Valor'
            value={novaSaida.valor} name='valor'
            onChange={OnChange} required disabled={isLoading}
          />
          <input 
            placeholder='Descrição'
            value={novaSaida.descricao} name='descricao'
            onChange={OnChange} required disabled={isLoading}
          />
          <button type='submit' disabled={isLoading} > Salvar Saida </button>
        </Form>
      </NovoRegistroStyle>
    );
  }

