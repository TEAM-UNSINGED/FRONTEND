import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

import {useInput} from '../../hooks/input';

import Input from '../../components/Input'

import { Container } from '../Landing/styles';
import { Content } from './styles';

const Validate: React.FC = () => {
  const {message, addMessage} = useInput();
  const history = useHistory();
  const [error, setError] = useState('');
  const [position, setPosition] = useState(0);
  const [CPF, setCPF] = useState <string[]>([]);
  
  const changeValue = useCallback(() => {
    console.log(position, 'POSITION');
    console.log(CPF[position], 'CPF[POSITION]');
    setCPF((state) => [...state, message]);;
    setPosition(position+1);
  }, [CPF, message, position]);
  
  useEffect(() => {
    if(message !== ''){
      if (message === 'B'){
        addMessage('');
        history.push('/');
      }else if(message === 'Cr'){
        setCPF((state) => state.filter((message) => message === null));
        addMessage('');
        setPosition(0);
      }else{
        changeValue();
        addMessage('');
      }
    }
  }, [addMessage, changeValue, history, message]);


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
      <h1>Validação</h1>
      <h1>Insira o seu CPF:</h1>   
      <Content>
        <Input message={CPF[0]}/>
        <Input message={CPF[1]}/>
        <Input message={CPF[2]}/>
        <Input message={CPF[3]}/>
        <Input message={CPF[4]}/>
        <Input message={CPF[5]}/>
        <Input message={CPF[6]}/>
        <Input message={CPF[7]}/>
        <Input message={CPF[8]}/>
        <Input message={CPF[9]}/>
        <Input message={CPF[10]}/>
      </Content>
      <h2>{error}</h2>
    </Container>
  );
};

export default Validate;
