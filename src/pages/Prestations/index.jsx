import React from "react";
import styled from "styled-components";

const GlobalContainer = styled.div`
    width: 100%;
`

const MainContainer = styled.div`
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 10% 5% 6% 5%;
    background-color: #F5EEE6;
    border-radius: 25px;
    @media(max-width: 1280px) {
        margin-top: 15%;
    }
    @media(max-width: 768px) {
        margin-top: 25%;
    }
`

const PrestationBanner = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: 100% 35%;
    margin-top: -40px;
    @media(max-width: 1280px) {
      height: 350px;
      margin-top: 35px;
    }
    @media(max-width: 768px) {
      height: 200px;
      margin-top: 110px;
    }
`

const TitleCenter = styled.div`
  display: flex;
  justify-content: center;
`

const TitleBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  position: absolute;
  padding: 0% 2% 0% 2%;
  top: 532px;
  flex-direction: column;
  background-color: #F5EEE6;
  border-radius: 10px;
  @media(max-width: 1280px) {
    top: 485px;
  }
  @media(max-width: 768px) {
    width: 90%;
    top: 400px;
  }
`

const MainTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 45px;
  @media(max-width: 768px) {
    font-size: 30px;
  }
`

const StyledHr = styled.hr`
  width: 150px;
  height: 3px;
  border-radius: 10px;
  background-color: #E6A4B4;
  border: none;
  margin-top: -10px;
  @media(max-width: 768px) {
    margin-top: 0px;
  }
`

const MainTitleSubtext = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  text-align: center;
`

const  ComingSoon = styled.p`
  font-size: 150px;
  @media(max-width: 1280px) {
    font-size: 70px;
  }
  @media(max-width: 768px) {
    font-size: 40px;
  }
`

export default function Prestations() {
    return(
        <GlobalContainer>
            <PrestationBanner src="https://i.ibb.co/zFSqfMH/petit-soleil.jpg" alt="banner-petits-soleil" />
            <TitleCenter>
                <TitleBox>
                    <MainTitle>Mes prestations</MainTitle>
                    <StyledHr></StyledHr>
                    <MainTitleSubtext>Sur commande via mes réseaux</MainTitleSubtext>
                </TitleBox>
            </TitleCenter>

            <MainContainer>
                <ComingSoon>Prochainement...</ComingSoon>
            </MainContainer>
        </GlobalContainer>
    )
}