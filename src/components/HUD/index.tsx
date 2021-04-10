import React from 'react';

import InputContainer from '../ButtonContainer';

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
