import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 25px auto;
  padding: 10px;
  text-align: center;
  background-color: #FC45AA;
  margin-bottom: 75px;
  border-radius: 12px;
`;

const PoemLine = styled.h1`
  font-size: 30px;
  text-align: center;
  font-family: 'Parisienne', cursive;
  font-size: 35px;
`;

const header = props => (
  <Container>
      <PoemLine>{props.line}</PoemLine>
  </Container>
);

export default header;