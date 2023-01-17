import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import axios from 'axios';
import Logo from '../../assets/logo.png';

import { LoginPagesStyles, Cadastre, Form } from './style';
import UserContext from '../../contexts/UserContext';

export default function LoginPage() {

    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [loginData, setLoginData] = useState({
      email: '',
      password: ''
    });

    function LoginAPI(e){
      e.preventDefault();
      setIsLoading(true);
      const promise = axios.post('URLPOST', loginData);
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
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    return (
      <LoginPagesStyles>
        <img src={Logo} />
        <Form onSubmit={LoginAPI}>
        <input 
            type='email' placeholder='E-mail'
            value={loginData.email} name='email'
            onChange={OnChange}  required disabled={isLoading}
            data-test='email-input'
          />
          <input 
            type='password' placeholder='Senha'
            value={loginData.password} name='password'
            onChange={OnChange}  required disabled={isLoading}
            data-test='password-input'
          />
          <button type='submit' disabled={isLoading} data-test='login-btn'> Entrar </button>
        </Form>

        <Link to={isLoading ? '' : '/cadastro'} data-test='signup-link'>
          <Cadastre>
            Primeira vez? Cadastre-se!
          </Cadastre>
        </Link>
      </LoginPagesStyles>
    );
  }

