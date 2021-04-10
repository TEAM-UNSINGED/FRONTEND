import React from 'react';

import InputContainer from '../InputContainer';

import { Container, Background } from './styles';

const HUD: React.FC = () => {
  return (
    <Container>
      <InputContainer/>
      <Background/>
    </Container>
  );
};

export default HUD;
