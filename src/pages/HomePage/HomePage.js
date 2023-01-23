import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import axios from 'axios';

import { HomePageStyle, HeaderStyleDiv, ButtonsStyleDiv, RegisterStyleDiv} from './style';
import UserContext from '../../contexts/UserContext';
import Register from '../HomePage/Register/Register';
import exitIcon from '../../assets/exiticon.png';
import iconnovaentrada from '../../assets/iconnovaentrada.png';
import iconnovasaida from '../../assets/iconnovasaida.png';

export default function HomePage() {

    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [emptyMessageView, SetEmptyMessageView] = useState(true);
    const [registers, setRegisters] = useState([]);

    useEffect(() => {
      carregaRegistros();
    }, []);

    function carregaRegistros(e){
      //e.preventDefault();
      setIsLoading(true);
      const promise = axios.get('http://localhost:5000/register', { headers: { 'Authorization': `Bearer ${token}` }});
      promise.then((res) => {
        setRegisters(res.data);
        SetEmptyMessageView(false);
        setIsLoading(false);
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
            <img src={exitIcon} onClick={() => console.log('clicou')}/>
        </HeaderStyleDiv>
        <RegisterStyleDiv>
            {registers.map((reg, _id) => 
              <Register
                key={_id}
                registerValue={reg.value}
                registerDescription={reg.description}
                registerMode={reg.mode}
                registerDate={reg.date}
              />
            )}
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

