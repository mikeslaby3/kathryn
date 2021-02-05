import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

const Button = styled.button`
  font-size: 20px;
  font-family: "Josefin Sans", sans-serif;
  background-color: red;
  text-transform: uppercase;
  display: block;
  margin: 20px auto;
  padding: 15px;
  cursor: pointer;
`;

const button = (props) => (
      <Button>
        <Link style={{ textDecoration: 'none' }} to={props.linkedPage}>{props.name}</Link>
      </Button>

)

export default button;