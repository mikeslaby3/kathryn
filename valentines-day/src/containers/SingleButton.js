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

const singleButton = (props) => (
    <Fragment>
        <ButtonContainer>
            <Button 
                name={props.singleButtonName}
                linkedPage={props.singleButtonLink}>
            </Button>
        </ButtonContainer>
    </Fragment>
)

export default singleButton;