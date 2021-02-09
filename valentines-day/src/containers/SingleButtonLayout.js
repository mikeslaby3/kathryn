import React, { Fragment } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import SingleButton from './SingleButton';

const StyledContainer = styled.div`
    margin: 50px auto;
    width: 350px;
    height: 100%;
`;

const singleButtonLayout = (props) => (
    <Fragment>
        <StyledContainer>
            <Header line={props.headerText}></Header>
            <SingleButton
                singleButtonName={props.buttonText}
                singleButtonLink={props.buttonLink}>
            </SingleButton>
        </StyledContainer>
    </Fragment>
)

export default singleButtonLayout;