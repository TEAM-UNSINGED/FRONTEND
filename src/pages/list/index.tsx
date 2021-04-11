import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

import {useInput} from '../../hooks/input';

import { Container } from '../Landing/styles';

const List: React.FC = () => {
  const {message, addMessage} = useInput();
  const history = useHistory();
  const [error, setError] = useState('');
  const clearError = useCallback(() => {
    const timer = setTimeout(() => {
      setError('');
    }, 5000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [setError]);
  
  useEffect(() => {
    if(message !== ''){
      switch (message) {
        case '1': {
          addMessage('');
          history.push('/candidatesList');
          break;
        }
        case '2': {
          addMessage('');
          history.push('/candidatesList');
          break;
        }
        case '3': {
          addMessage('');
          history.push('/candidatesList');
          break;
        }
        case 'Cf': {
          addMessage('');
          history.push('/endScreen');
          break;
        }
        case 'B': {
          addMessage('');
          history.push('/');
          break;
        }
        default: {
          setError('OPÇÃO INVALIDA TENTE NOVAMENTE!');
          clearError();
        }
      }
    }
  }, [message, history, setError, addMessage, clearError]);

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

