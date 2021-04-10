import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";

import {useInput} from '../../hooks/input';

import { Container, Button} from './styles';

const Landing: React.FC = () => {
  const {message} = useInput();
  const history = useHistory();
  function handleButton(){
    history.push('/list')
  }

  useEffect(() => {
    if(message !== ''){
      console.log(message, 'MESSAGE');
    }
  });

  return (
    <Container>
      <h1>Bem vindo(a)! <br></br> Escolha: </h1>
      <Button>1 - Votar</Button>
      <Button onClick={handleButton}>2 - Listar Candidatos</Button>
      
    </Container>
  );
};

export default Landing
