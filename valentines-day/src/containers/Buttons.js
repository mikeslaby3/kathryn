import React, { Fragment } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';

const ButtonContainer = styled.div`
    margin: 50px auto;
    width: 350px;
    height: 100%;
    background-color: #FDA4BA;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 12px;
`;

const layout = (props) => (
    <Fragment>
        <ButtonContainer>
            <Button 
                name={props.b1t}
                linkedPage={props.b1l}>
            </Button>
            <Button 
                name={props.b2t}
                linkedPage={props.b2l}>
            </Button>
        </ButtonContainer>
    </Fragment>
)

export default layout;