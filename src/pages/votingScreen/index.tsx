import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

import {useInput} from '../../hooks/input';

import { Container } from '../../pages/Landing/styles';

      
const Voting: React.FC = () => {
  
  return (
    <Container>
      <h1>Seu voto para</h1>
      <h1>Presidente</h1>   
     <h1>Retangulo</h1>
    </Container>
  );
};

export default Voting
