import styled from 'styled-components';

export const NovoRegistroStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  input{
    height: 58px;
    width: 100%;
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
    width: 100%;
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

export const HeaderStyle = styled.div`
    width: 90%;
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: white;
`

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`
