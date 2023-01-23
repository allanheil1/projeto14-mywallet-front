import UserContext from '../../../contexts/UserContext';
import { RegisterStyle, Box } from './style';

export default function Register({ registerValue, registerDescription, registerMode, registerDate }) {

    return (
      <Box>
        <RegisterStyle>
            <h1> {registerValue} </h1>
            <h2> {registerDescription} </h2>
            <h3> {registerMode} </h3>
            <h4> {registerDate} </h4>
        </RegisterStyle>
      </Box>
    );
  }