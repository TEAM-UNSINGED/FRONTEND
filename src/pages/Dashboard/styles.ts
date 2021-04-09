import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  width: 100%;
  background: #d9d9d9;
  box-shadow: 0 0 14px 0 rgba(0,0,0.02);
  border-radius: 2px;
  padding: 30px 20px;
  margin-top: 0px;
`;

export const Content = styled.div`
  display: flex;
  //flex-direction: column;
  place-content: center;
  width: 100%;
  //max-width: 1080px;
  text-align: center;

  h1 {
    //text-align: center;
    //margin-bottom: 24px;
  }
`;
