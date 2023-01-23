import { useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import axios from 'axios';

import { NovoRegistroStyle, HeaderStyle, Form } from './style';
import UserContext from '../../contexts/UserContext';

export default function NovaSaida() {

    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [novaSaida, setNovaSaida] = useState({
      value: '',
      description: '',
      mode: 'saida'
    });

    function RegistrarNovaSaida(e){
      e.preventDefault();
      setIsLoading(true);
      const promise = axios.post(process.env.REACT_APP_REGISTER_URL, novaSaida, { headers: { 'Authorization': `Bearer ${token}` }});
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
            value={novaSaida.value} name='value'
            onChange={OnChange} required disabled={isLoading}
          />
          <input 
            placeholder='Descrição'
            value={novaSaida.description} name='description'
            onChange={OnChange} required disabled={isLoading}
          />
          <button type='submit' disabled={isLoading} > Salvar Saida </button>
        </Form>
      </NovoRegistroStyle>
    );
  }

