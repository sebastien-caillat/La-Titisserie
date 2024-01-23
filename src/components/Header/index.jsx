import React from "react";
import styled from "styled-components";
import { StyledLink } from '../../utils/style/Atoms';

    const HeaderContainer = styled.div`
        display: flex;
    `

    const LogoTitle = styled.p`
        font-family: 'Alex Brush', cursive;
        font-size: 40px;
    `

    const NavBar = styled.nav`
        display: flex;
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