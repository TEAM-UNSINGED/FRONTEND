import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

import {useInput} from '../../hooks/input';

import { Container } from './styles';

const Landing: React.FC = () => {
  const {message} = useInput();
  const history = useHistory();
  const [error, setError] = useState('');

  useEffect(() => {
    if(message !== ''){
      switch (message) {
        
        case '2': {
          history.push('/list');
          break;
        }

        default: {
          setError('OPÇÃO INVALIDA TENTE NOVAMENTE!');
        }
      }
    }
  }, [message, history, setError]);

  return (
    <Container>
      <h1>Bem vindo(a)!</h1>
      <h1>Escolha:</h1>
      <h1>1 - Votar</h1>
      <h1>2 - Listar Candidatos</h1>
      <h2>{error}</h2>
    </Container>
  );
};

export default Landing
