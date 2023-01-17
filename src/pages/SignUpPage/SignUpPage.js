import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import { SignUpPageStyles, Login, Form } from './style'

export default function SignUpPage() {

    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState({
      email: '',
      name: '',
      confirm: '',
      password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    function SignUpAPI(e){
      e.preventDefault();
      setIsLoading(true);
      const promise = axios.post('URL POST', { ...signUpData });
      promise.then(() => {
        setIsLoading(false);
        navigate('/');
      });
      promise.catch((err) => {
        setIsLoading(false);
        const errorMsg = err.response.statusText;
        alert(`Erro: ${errorMsg}`);
      })
    }

    function OnChange(e) {
      setSignUpData({ ...signUpData, [e.target.name]: e.target.value});
    }

    return (
      <SignUpPageStyles>

        <Form onSubmit={SignUpAPI}>
        <input 
            type='text' placeholder='Nome'
            value={signUpData.name} name='name'
            onChange={OnChange} required
            data-test='user-name-input'
            disabled={isLoading}
          />
          <input 
            type='email' placeholder='E-mail'
            value={signUpData.email} name='email'
            onChange={OnChange} required
            data-test='email-input'
            disabled={isLoading}
          />
          <input 
            type='password' placeholder='Senha'
            value={signUpData.password} name='password'
            onChange={OnChange} required
            data-test='password-input'
            disabled={isLoading}
          />
          <input 
            type='text' placeholder='Confirme a Senha'
            value={signUpData.confirm} name='confirm'
            onChange={OnChange} required
            data-test='user-image-input'
            disabled={isLoading}
          />
          <button type='submit' disabled={isLoading} data-test='signup-btn'>Enviar</button>
        </Form>

        <Link to={isLoading ? '' : '/'} data-test='login-link'>
          <Login>
            Já tem uma conta? Entre Agora!
          </Login>
        </Link>
      </SignUpPageStyles>
    );
  }