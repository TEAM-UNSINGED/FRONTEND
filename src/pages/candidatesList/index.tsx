import React, {useCallback, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import {useInput} from '../../hooks/input';

import BottomContent from '../../components/BottomContainer';
import PictureContainer from '../../components/PictureContainer';


import { Container, Content, NumberContainer, BottomContainer, TopPictureContainer, BottomPictureContainer} from './styles';


const CandidateList: React.FC = () => {
  const {message, addMessage} = useInput();
  const history = useHistory();
  const valor = 'X'
  const nome = 'Dado no back-end'
  const partido = 'Dado no back-end'


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
      <NumberContainer>
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
      </NumberContainer>
      <h1>Nome: {nome}</h1>
      <BottomPictureContainer>
        <PictureContainer/>
      </BottomPictureContainer>
      <h1>Partido: {partido}</h1>
      <BottomContainer>
        <BottomContent 
          Confirma='o PROXIMO candidato' 
          Corrige='o candidato ANTERIOR' 
          Branco='VOLTAR a tela de listagem'
        />
      </BottomContainer>
    </Container>
  );
};

export default CandidateList;

