import React from 'react';

import N0 from '../../assets/n0.svg';
import N1 from '../../assets/botoes/n1.svg'
import N2 from '../../assets/botoes/n2.svg'
import N3 from '../../assets/botoes/n3.svg'
import N4 from '../../assets/botoes/n4.svg'
import N5 from '../../assets/botoes/n5.svg'
import N6 from '../../assets/botoes/n6.svg'
import N7 from '../../assets/botoes/n7.svg'
import N8 from '../../assets/botoes/n8.svg'
import N9 from '../../assets/botoes/n9.svg'
import { Container} from './styles';

const InputContainer: React.FC = () => {

  return (
    <Container>
      <input
        id="1"
        name="1"
        type="image"
        src={N1}
        alt="n1"
        onClick={() => {}}
      />
      <input
        id="2"
        name="2"
        type="image"
        src={N2}
        alt="n2"
        onClick={() => {}}
      />
      <input
        id="3"
        name="3"
        type="image"
        src={N3}
        alt="n3"
        onClick={() => {}}
      />
      <input
        id="4"
        name="4"
        type="image"
        src={N4}
        alt="n4"
        onClick={() => {}}
      />
      <input
        id="5"
        name="5"
        type="image"
        src={N5}
        alt="n5"
        onClick={() => {}}
      />
      <input
        id="6"
        name="6"
        type="image"
        src={N6}
        alt="n6"
        onClick={() => {}}
      />
      <input
        id="7"
        name="7"
        type="image"
        src={N7}
        alt="n7"
        onClick={() => {}}
      />
      <input
        id="8"
        name="8"
        type="image"
        src={N8}
        alt="n8"
        onClick={() => {}}
      />
      <input
        id="9"
        name="9"
        type="image"
        src={N9}
        alt="n9"
        onClick={() => {}}
      />
      <input
        id="0"
        name="0"
        type="image"
        src={N0}
        alt="n0"
        onClick={() => {}}
      />
    </Container>
  );
};

export default InputContainer;