import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { Content, TypeCandidate } from '../../components/HUD/styles';

import {useInput} from '../../hooks/input';

import { Container } from '../Landing/styles';

const Voting: React.FC = () => {
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
      <h1>Seu voto para</h1>
      <TypeCandidate>candidate</TypeCandidate>
      <Content></Content>
      <h2>{error}</h2>
    </Container>
  );
};

export default Voting;

