import React, {/*useCallback,*/ useCallback, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

import {useInput} from '../../hooks/input';

// import Input from '../../components/Input'

import BottomContainer from '../../components/BottonContainer';
import PictureContainer from '../../components/PictureContainer';

import { Container } from '../Landing/styles';
import { Content, TopPictureContainer, BottomPictureContainer} from './styles';

const CandidateList: React.FC = () => {
  const {message, addMessage} = useInput();
  const history = useHistory();
  const [error, setError] = useState('');
  const valor = 'X'
  const nome = 'Dado no back-end'
  const partido = 'Dado no back-end'
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setError('');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [setError]);

  const handleInputOption = useCallback(() => {
    if (message === 'B') {
      addMessage('');
      history.push('/list');
    }
  }, [addMessage, history, message]);

  useEffect(() => {
    if(message !== ''){
      handleInputOption();
    }
  });

  return (
    <Container>
      <TopPictureContainer>
        <PictureContainer/>
      </TopPictureContainer>
      <h1>Tipo de candidato<br/></h1>
      <h1>Número: </h1>
      <Content>
          {valor}
      </Content>

      <Content>
          {valor}
      </Content>

      <Content>
          {valor}
      </Content>
      <h1>Nome: {nome}</h1>
      <BottomPictureContainer>
        <PictureContainer/>
      </BottomPictureContainer>
      <h1>Partido: {partido}</h1>
      <h2>{error}</h2>
      <BottomContainer Confirma='o PROXIMO candidato' Corrige='o candidato ANTERIOR' Branco='VOLTAR a tela de listagem'/>
    </Container>
  );
};

export default CandidateList;

