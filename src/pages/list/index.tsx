import React from 'react';

import { Container, Button} from '../Landing/styles';
const List: React.FC = () => {
  return (
    <Container>
      <h1>Listando Candidatos <br></br> Escolha: </h1>
      <Button>1 - Presidente</Button>
      <Button>2 - Governador</Button>
      <Button>3 - Senador</Button>  
    </Container>
  );
};

export default List;

