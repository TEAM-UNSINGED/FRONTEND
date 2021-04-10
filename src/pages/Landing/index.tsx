import React from 'react';

// import HUD from '../../components/HUD';

import { Container} from './styles';
const Landing: React.FC = () => {
  return (
    <Container>
      <h1>Bem vindo(a)! <br></br> Escolha: </h1>
      <button>1 - Votar</button>
      <br></br>
      <button>2 - Listar Candidatos</button>
      
    </Container>
  );
};

export default Landing;
