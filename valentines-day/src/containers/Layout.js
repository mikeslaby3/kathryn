import React, { Fragment } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Button from '../components/Button';

const StyledContainer = styled.div`
    margin: 50px auto;
    width: 350px;
    height: 100%;
    background-image: url("../images/pixel-heart.png");
`;

const layout = (props) => (
    <Fragment>
        <StyledContainer>
            <Header line={props.headerText}></Header>
            <Button 
                name={props.button1Text}
                linkedPage={props.button1Link}>
            </Button>
            <Button 
                name={props.button2Text}
                linkedPage={props.button2Link}>
            </Button>
        </StyledContainer>
    </Fragment>
)

export default layout;