import React from 'react';

// import HUD from '../../components/HUD';

import { Container, Button} from './styles';
const Landing: React.FC = () => {
  return (
    <Container>
      <h1>Bem vindo(a)! <br></br> Escolha: </h1>
      <Button>1 - Votar</Button>
      <br></br>
      <Button>2 - Listar Candidatos</Button>
      
    </Container>
  );
};

export default Landing;
