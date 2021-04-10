
import React from 'react';

import { useInput } from '../../hooks/input';

import N0 from '../../assets/botoes/n0.svg';
import N1 from '../../assets/botoes/n1.svg'
import N2 from '../../assets/botoes/n2.svg'
import N3 from '../../assets/botoes/n3.svg'
import N4 from '../../assets/botoes/n4.svg'
import N5 from '../../assets/botoes/n5.svg'
import N6 from '../../assets/botoes/n6.svg'
import N7 from '../../assets/botoes/n7.svg'
import N8 from '../../assets/botoes/n8.svg'
import N9 from '../../assets/botoes/n9.svg'

import { Container, SetOf3} from './styles';

const InputContainer: React.FC = () => {
  const {addMessage} = useInput();
  return (
    <Container>

      <SetOf3>
        <input
          id="1"
          name="1"
          type="image"
          src={N1}
          alt="n1"
          onClick={() => {addMessage('1')}}
        />
        <input
          id="2"
          name="2"
          type="image"
          src={N2}
          alt="n2"
          onClick={() => {addMessage('2')}}
        />
        <input
          id="3"
          name="3"
          type="image"
          src={N3}
          alt="n3"
          onClick={() => {addMessage('3')}}
        />
      </SetOf3>

      <SetOf3>
      <input
        id="4"
        name="4"
        type="image"
        src={N4}
        alt="n4"
        onClick={() => {addMessage('4')}}
        />
      <input
        id="5"
        name="5"
        type="image"
        src={N5}
        alt="n5"
        onClick={() => {addMessage('5')}}
        />
      <input
        id="6"
        name="6"
        type="image"
        src={N6}
        alt="n6"
        onClick={() => {addMessage('6')}}
        />
      </SetOf3>

      <SetOf3>
      <input
        id="7"
        name="7"
        type="image"
        src={N7}
        alt="n7"
        onClick={() => {addMessage('7')}}
        />

      <input
        id="8"
        name="8"
        type="image"
        src={N8}
        alt="n8"
        onClick={() => {addMessage('8')}}
        />
      <input
        id="9"
        name="9"
        type="image"
        src={N9}
        alt="n9"
        onClick={() => {addMessage('9')}}
        />
      </SetOf3>
      <input
        id="0"
        name="0"
        type="image"
        src={N0}
        alt="n0"
        onClick={() => {addMessage('0')}}
        />
    </Container>
  );
};

export default InputContainer;
