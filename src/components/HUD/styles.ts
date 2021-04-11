import styled from 'styled-components';

import urnaHUD from '../../assets/urnaHUD.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  border-radius: 2px;
  padding: 30px 20px;
  
`;

export const Background = styled.div`
  flex: 1;
  background: url(${urnaHUD});
  background-size: cover;
`;

export const Content = styled.div`
  display: block;
  position: absolute;
  left: 130px;
  top: 110px;
  width: 33px;
  height: 45px;
  border: 2px solid #666;
  font-size: 25px;
  font-weight: 400;
  padding: 2px 2px 2px 2px;
  text-align: center;
`
export const TypeCandidate = styled.h1`
  display: block;
  position: absolute;
  left: 200px;
`
