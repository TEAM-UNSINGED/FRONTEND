import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

import {useInput} from '../../hooks/input';

import { Container } from '../Landing/styles';

const List: React.FC = () => {
  const {message, addMessage} = useInput();
  const history = useHistory();
  const [error, setError] = useState('');

  useEffect(() => {
    if(message !== ''){
      switch (message) {
        
        case 'B': {
          addMessage('');
          history.push('/');
          break;
        }

        default: {
          setError('OPÇÃO INVALIDA TENTE NOVAMENTE!');
        }
      }
    }
  }, [message, history, setError, addMessage]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setError('');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [setError]);

  return (
    <Container>
      <h1>Listando Candidatos </h1> 
      <h1> Escolha: </h1>
      <h1>1 - Presidente</h1>
      <h1>2 - Governador</h1>
      <h1>3 - Senador</h1> 
      <h1>BRANCO - voltar</h1> 
      <h2>{error}</h2>
    </Container>
  );
};

export default List;

