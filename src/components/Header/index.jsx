import React from "react";
import styled from "styled-components";
import { StyledLink } from '../../utils/style/Atoms';

    const HeaderContainer = styled.div`
        width: 90%;
        height: auto;
        display: flex;
        justify-content: space-between;
        margin: 0% 5% 0% 5%;
        @media(max-width: 1280px) {
            flex-direction: column;
            align-items: center;
        }
    `

    const LogoTitle = styled.p`
        font-family: 'Alex Brush', cursive;
        font-size: 55px;
    `

    const NavBar = styled.nav`
        display: flex;
        height: 30px;
        margin-top: 80px;
        z-index: 999; 
        @media(max-width: 1280px) {
            margin-top: 0px;                    
        }
    `

export default function Header() {
    return(
        <HeaderContainer>
            <LogoTitle>La Titisserie</LogoTitle> 
            <NavBar>
                <StyledLink to="/">ACCUEIL</StyledLink>
                <StyledLink to="realisations">REALISATIONS</StyledLink>
                <StyledLink to="prestations">PRESTATIONS</StyledLink>
            </NavBar>
        </HeaderContainer>
    )
}