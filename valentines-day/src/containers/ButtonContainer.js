import React, { Fragment } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';

const ButtonContainer = styled.div`
    margin: 50px auto;
    width: 350px;
    height: 100%;
    background-image: url("../images/pixel-heart.png");
`;

const layout = (props) => (
    <Fragment>
        <ButtonContainer>
            <Button 
                name={props.button1Text}
                linkedPage={props.button1Link}>
            </Button>
            <Button 
                name={props.button2Text}
                linkedPage={props.button2Link}>
            </Button>
        </ButtonContainer>
    </Fragment>
)

export default layout;