import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import axios from 'axios';

import { HomePageStyle, HeaderStyleDiv, ButtonsStyleDiv, RegisterStyleDiv} from './style';
import UserContext from '../../contexts/UserContext';
import exitIcon from '../../assets/exiticon.png'
import iconnovaentrada from '../../assets/iconnovaentrada.png'
import iconnovasaida from '../../assets/iconnovasaida.png'

export default function HomePage() {

    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [registers, setRegisters] = useState([]);

    function carregaRegistros(e){
      e.preventDefault();
      setIsLoading(true);
      const promise = axios.get('URLGET');
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

    return (
      <HomePageStyle>
        <HeaderStyleDiv>
            Olá, Fulano
            <img src={exitIcon}/>
        </HeaderStyleDiv>
        <RegisterStyleDiv>
            Content registers
        </RegisterStyleDiv>
        <ButtonsStyleDiv>
            <button type='submit' disabled={isLoading} onClick={() => navigate('/nova-entrada')}> 
                <img src={iconnovaentrada}/>
                <h1> Nova Entrada </h1>
            </button>
            <button type='submit' disabled={isLoading} onClick={() => navigate('/nova-saida')}> 
                <img src={iconnovasaida}/>
                <h1> Nova Saída </h1>
            </button>
        </ButtonsStyleDiv>
      </HomePageStyle>
    );
  }

