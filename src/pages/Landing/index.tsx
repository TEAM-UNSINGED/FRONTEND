import React from 'react';
import {useHistory} from 'react-router-dom';
import { Container, Button} from './styles';
const Landing: React.FC = () => {
  const History = useHistory();
  return (
    <Container>
      <h1>Bem vindo(a)! <br></br> Escolha: </h1>
      <Button>1 - Votar</Button>
      <Button type="submit" onClick={() => {History.push('/list')}}>2 - Listar Candidatos</Button>
      
    </Container>
  );
};

export default Landing;
