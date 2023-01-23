import { RegisterStyle } from './style';
import dayjs from 'dayjs';

export default function Register({ registerValue, registerDescription, registerMode, registerDate }) {
    const date = dayjs(registerDate).format('DD/MM');
    return (
        <RegisterStyle mode={registerMode}>
            <h1> <span>{date}</span> {registerDescription} </h1>
            <h2> {registerValue} </h2>
        </RegisterStyle>
    );
  }