import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import colors from '../../utils/style/colors';

const GlobalContainer = styled.div`
    width: 100%;
    height: 600px;
`
const ErrorDiv = styled.div`
    display: flex;
    height: 100%;
    margin: -0% 5% 0% 5%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ErrorText = styled.p`
    font-size: 100px;
    position: absolute;
    top: 225px;
`

const StyledHr = styled.hr`
  width: 200px;
  height: 6px;
  border-radius: 10px;
  background-color: #E6A4B4;
  border: none;
`

const StyledHomeLink = styled(Link)`
    font-size: 18px;
    margin-top: 20px;
    text-decoration: none;
    &:visited {
        color: ${colors.primary};
    }
    &:hover {
        text-decoration: underline;
    }
`

export default function Error() {
    return(
        <GlobalContainer>
            <ErrorDiv>
                <ErrorText>Error 404</ErrorText>
                <StyledHr></StyledHr>
                <StyledHomeLink to="/">Retourner sur la page d'accueil</StyledHomeLink>
            </ErrorDiv>
        </GlobalContainer>
    )
}