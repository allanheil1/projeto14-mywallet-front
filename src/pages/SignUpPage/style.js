import styled from 'styled-components';

export const SignUpPageStyles = styled.div`
  height: 100vh;
	display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    margin-bottom: 32px;
  }

  input{
    height: 58px;
    width: 326px;
    margin-bottom: 13px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: #000000;
    padding-left: 10px;
    ::placeholder{
      color: #a7a4a8;
      font-size: 20px;
      text-decoration: none;
    }

  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    width: 326px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-align: center;
    margin-bottom: 15px;
    background-color: #A328D6;
    cursor: pointer;
  }
  button:disabled{
      opacity: 0.7;
  }
`

export const Login = styled.div`
  color: #FFFFFF;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`

