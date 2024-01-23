import React from "react";
import styled from "styled-components";
import { StyledLink } from '../../utils/style/Atoms';

    const HeaderContainer = styled.div`
        width: 90%;
        height: auto;
        display: flex;
        justify-content: space-between;
        margin: 0% 5% 0% 5%;
    `

    const LogoTitle = styled.p`
        font-family: 'Alex Brush', cursive;
        font-size: 55px;
    `

    const NavBar = styled.nav`
        display: flex;
        height: 30px;
        margin-top: 80px;
    `

export default function Header() {
    return(
        <HeaderContainer>
            <LogoTitle>Tristan Caillat</LogoTitle> 
            <NavBar>
                <StyledLink to="/">ACCUEIL</StyledLink>
                <StyledLink to="realisations">REALISATIONS</StyledLink>
                <StyledLink to="prestations">PRESTATIONS</StyledLink>
            </NavBar>
        </HeaderContainer>
    )
}