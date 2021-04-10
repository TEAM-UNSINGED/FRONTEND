import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";

// import HUD from '../../components/HUD';

import { Container, Button} from './styles';
const Landing: React.FC = () => {
  const history = useHistory();
  function handleButton(){
    history.push('/list')
  }
  return (
    <Container>
      <h1>Bem vindo(a)! <br></br> Escolha: </h1>
      <Button>1 - Votar</Button>
      <Button onClick={handleButton}>2 - Listar Candidatos</Button>
      
    </Container>
  );
};

export default Landing
