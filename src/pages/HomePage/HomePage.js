import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import axios from 'axios';

import { HomePageStyle, BalanceStyle, HeaderStyleDiv, ButtonsStyleDiv, RegisterStyleDiv} from './style';
import UserContext from '../../contexts/UserContext';
import Register from '../HomePage/Register/Register';
import exitIcon from '../../assets/exiticon.png';
import iconnovaentrada from '../../assets/iconnovaentrada.png';
import iconnovasaida from '../../assets/iconnovasaida.png';

export default function HomePage() {

    const navigate = useNavigate();
    const { token, user } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [emptyMessageView, SetEmptyMessageView] = useState(true);
    const [registers, setRegisters] = useState([]);

    useEffect(() => {
      BalanceCalculus();
      carregaRegistros();
    }, []);

    function BalanceCalculus() {
      if (registers.length > 0) {
        return registers.reduce((acc, curr) => {
          if (curr.mode === 'entrada') {
            return acc + curr.value;
          }
          return acc - curr.value;
        }, 0);
      } else {
        return 0;
      }
    }

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

    const balance = BalanceCalculus();

    if(registers.length === 0){
      return (
        <HomePageStyle>
        <HeaderStyleDiv>
            Olá, {user}
            <img src={exitIcon} onClick={() => console.log('clicou')}/>
        </HeaderStyleDiv>
        <RegisterStyleDiv>
          <h3> Não há registros de entrada ou saída </h3>
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

    return (
      <HomePageStyle>
        <HeaderStyleDiv>
            Olá, {user}
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
            ).reverse()}

            <BalanceStyle balanceCalc={balance >= 0}>
              <h1>SALDO:</h1> <h2>{balance}</h2>
            </BalanceStyle>

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

