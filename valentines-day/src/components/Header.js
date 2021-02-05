import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 25px auto;
  text-align: center;
  background-color: red;
`;

const PoemLine = styled.h1`
  font-size: 30px;
  margin-bottom: 75px;
  text-align: center;
`;

const header = props => (
  <Container>
      <PoemLine>{props.line}</PoemLine>
  </Container>
);

export default header;