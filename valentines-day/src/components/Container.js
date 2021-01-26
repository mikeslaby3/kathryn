import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: grey;
    height: 100vs;
`;

const container = (props) => (
    <StyledContainer>
        <h1>{props.headerText}</h1>
        <h2>Hello</h2>
    </StyledContainer>
)

export default container;