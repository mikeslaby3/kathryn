import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

const Button = styled.button`
  font-size: 25px;
  color: red;
  background-color: #DEDEDE;
  display: block;
  margin: 20px auto;
  padding: 15px;
  cursor: pointer;
  border: 3px solid black;
  border-radius: 12px;
  font-family: 'Londrina Solid', cursive;
`;

const button = (props) => (
      <Button>
        <Link 
        to={props.linkedPage}
        style={{ textDecoration: 'none', color: 'black'}}>
          {props.name}
        </Link>
      </Button>
)

export default button;