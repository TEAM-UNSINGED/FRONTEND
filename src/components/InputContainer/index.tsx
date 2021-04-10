import React from 'react';

import N0 from '../../assets/n0.svg';

import { Container} from './styles';

const InputContainer: React.FC = () => {

  return (
    <Container>
      <input
        id="1"
        name="1"
        type="image"
        src={N0}
        alt="n1"
        onClick={() => {}}
      />

    </Container>
  );
};

export default InputContainer;