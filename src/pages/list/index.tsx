import React, {useCallback, useEffect, useRef, useState} from 'react';
import { useHistory } from "react-router-dom";
import Api from '../../services/API';
import {useInput} from '../../hooks/input';

import BottomContent from '../../components/BottomContainer';
import PictureContainer from '../../components/PictureContainer';
import { Container, Content, NumberContainer, BottomContainer, TopPictureContainer, BottomPictureContainer} from './styles';

interface VotingProps {
  type?: 'Menu' | 'Presidente' | 'Governador' | 'Senador';
  candidates?: object;
}

const List: React.FC<VotingProps> = ({type = 'Menu', candidates}) => {
  const typeRef = useRef<VotingProps>({} as VotingProps);
  const {message, addMessage} = useInput();
  const history = useHistory();
  const [error, setError] = useState('');
  const valor = 'X';
  const nome = 'Dado no back-end';
  const partido = 'Dado no back-end';
  
  if (typeRef.current.type !== undefined){
    type = typeRef.current.type;
  }
  
  const clearError = useCallback(() => {
    const timer = setTimeout(() => {
      setError('');
    }, 5000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [setError]);

  const getCandidates = useCallback(async () => {
    const response = await Api.get(
      '/candidate',
      {params: {enum: typeRef.current.type?.toLowerCase()}},
    ).catch((error) => {
      console.log(error, 'ERRO NO BACKEND!');
    });
    console.log(response, 'RESPONSE');
  }, []);

  const handleMenuOptions = useCallback(() => {
    switch (message) {
      case '1': {
        addMessage('');
        typeRef.current.type='Presidente'
        getCandidates();
        history.push('/list', typeRef.current);
        break;
      }
      case '2': {
        addMessage('');
        typeRef.current.type='Presidente'
        getCandidates();
        history.push('/list', typeRef.current);;
        break;
      }
      case '3': {
        addMessage('');
        typeRef.current.type='Presidente'
        getCandidates();
        history.push('/list', typeRef.current);
        break;
      }
      case 'B': {
        addMessage('');
        history.push('/');
        break;
      }
      default: {
        setError('OP????O INVALIDA TENTE NOVAMENTE!');
        clearError();
      }
    }
  },[addMessage, clearError, getCandidates, history, message]);

  const handleDefaultOptions = useCallback(() => {
    switch (message) {

      case 'B': {
        addMessage('');
        history.push('/list', typeRef.current.type='Menu');
        break;
      }

      default: {
        setError('OP????O INVALIDA TENTE NOVAMENTE!');
        clearError();
      }
    }
  },[addMessage, clearError, history, message]);
  
  useEffect(() => {
    if(message !== ''){
      switch (type){
        case 'Menu': {
          handleMenuOptions();
          break;
        }

        default: {
          handleDefaultOptions();
        }
      }
    }
  }, [message, type, handleMenuOptions, handleDefaultOptions]);

  const Sessions = {
    Menu:
      <Container>
        <h1>Listando Candidatos </h1> 
        <h1> Escolha: </h1>
        <h1>1 - Presidente</h1>
        <h1>2 - Governador</h1>
        <h1>3 - Senador</h1> 
        <h1>BRANCO - voltar</h1> 
        <h2>{error}</h2>
      </Container>,
    
    Presidente: 
      <Container>
        <TopPictureContainer>
          <PictureContainer/>
        </TopPictureContainer>
        <h1>Tipo de candidato<br/></h1>
        <NumberContainer>
          <h1>N??mero: </h1>
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
      </Container>,
  
    Governador: 
    <Container>
        <TopPictureContainer>
          <PictureContainer/>
        </TopPictureContainer>
        <h1>Tipo de candidato<br/></h1>
        <NumberContainer>
          <h1>N??mero: </h1>
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
      </Container>,
  
    Senador: 
    <Container>
        <TopPictureContainer>
          <PictureContainer/>
        </TopPictureContainer>
        <h1>Tipo de candidato<br/></h1>
        <NumberContainer>
          <h1>N??mero: </h1>
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
      </Container>,
  };

  return (
    <>
      {Sessions[type]}
    </>
  );
};

export default List;

