import styled from 'styled-components';

export const HomePageStyle = styled.div`
  width: 100%;
  height: 100vh;
	display:flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Raleway';
  font-style: normal;
`

export const HeaderStyleDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 26px;
  color: white;
`

export const RegisterStyleDiv = styled.div`
  height: 446px;
  width: 90%;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 15px;
`

export const ButtonsStyleDiv = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;

  button{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 114px;
    width: 155px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: white;
    gap: 15px;
    background-color: #A328D6;
  }
  button:disabled{
      opacity: 0.7;
  }

  img{
    height: 25px;
    width: 22px;
    margin-top: 9px;
    margin-left: 7px
  }

  h1{
    width: 50px;
    font-size: 17px;
    text-align: start;
    margin-left: 10px;
    margin-bottom: 9px;
  }
`
