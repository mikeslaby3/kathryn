import React, { Fragment } from 'react';
import styled from 'styled-components';

import Background from "./BackgroundImage.css";

import Header from '../components/Header';
import Buttons from './Buttons';

const StyledContainer = styled.div`
    margin: 50px auto;
    width: 350px;
    height: 100%;
`;

const layout = (props) => (
    <Fragment>
        <StyledContainer>
            <Header line={props.headerText}></Header>
            <Buttons
                b1t={props.button1Text}
                b1l={props.button1Link}
                b2t={props.button2Text}
                b2l={props.button2Link}>
            </Buttons>
        </StyledContainer>
    </Fragment>
)

export default layout;