import styled, { css } from 'styled-components';

interface ContainerProps{
  isFocused: boolean;
  isErrored: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  border: 2px solid #6F9F77;

  & + div {
    margin-top: 8px;
  }

  ${(props) => props.isErrored && css`
    border-color: #c53030;
  `}

  ${(props) => props.isFocused && css`
    color: #517957;
    border-color: #517957;
  `}

  ${(props) => props.isFilled && css`
    color: #517957;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #000;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
