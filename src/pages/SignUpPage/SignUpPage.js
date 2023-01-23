import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import { SignUpPageStyles, Login, Form } from './style'

export default function SignUpPage() {

    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState({
      email: '',
      name: '',
      confirmPass: '',
      password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    function SignUpAPI(e){
      e.preventDefault();

      if(signUpData.password !== signUpData.confirmPass){
        alert('Os campos de senha não batem! Por favor insira a mesma senha em ambos\n')
        setSignUpData({ ...signUpData, password: '', confirmPass: ''});
        return;
      }
      setIsLoading(true);
      const promise = axios.post(process.env.REACT_APP_SIGNUP_URL, { ...signUpData });
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
            disabled={isLoading}
          />
          <input 
            type='email' placeholder='E-mail'
            value={signUpData.email} name='email'
            onChange={OnChange} required
            disabled={isLoading}
          />
          <input 
            type='password' placeholder='Senha'
            value={signUpData.password} name='password'
            onChange={OnChange} required
            disabled={isLoading}
          />
          <input 
            type='password' placeholder='Confirme a Senha'
            value={signUpData.confirmPass} name='confirmPass'
            onChange={OnChange} required
            disabled={isLoading}
          />
          <button type='submit' disabled={isLoading} > Cadastrar </button>
        </Form>

        <Link to={isLoading ? '' : '/'} >
          <Login>
            Já tem uma conta? Entre Agora!
          </Login>
        </Link>
      </SignUpPageStyles>
    );
  }