import React from 'react';
import styled from "styled-components";

import Carousel from "../../components/Carousel";

import { CarouselItem } from "../../components/Carousel";
import { YoutubeEmbed } from '../../assets/YoutubeEmbed';

import heartbanner from "../../assets/banner/heartbanner.webp";
import mobileheartbanner from "../../assets/banner/mobileheartbanner.webp";

const GlobalContainer = styled.div`
  width: 100%;
`

const StyledCarouselItemImg = styled.img`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 100%;
    background-image: url(${heartbanner});
    background-size: cover;
    background-position: 50% 50%;
    @media(max-width: 1280px) {
      height: 350px;
    }
    @media(max-width: 768px) {
      height: 200px;
      background-image: url(${mobileheartbanner}); 
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
    top: 490px;
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

const InfosContainer = styled.div`
  height: auto;
  display: flex;
  margin: 10% 0% 10% 0%;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 1280px) {
    flex-direction: column;
  }
  @media(max-width: 768px) {
    margin: 0% 0% 15% 0%;
  }
`

const PresentationBox = styled.div`
  width: 25%;
  height: auto;
  background-color: #F5EEE6;
  border-radius: 25px;
  margin-left: 5%;
  padding: 2% 1% 2% 1%;
  @media(max-width: 1280px) {
    width: 80%;
    margin: 0% 0% 10% 0%;
    padding: 2%;
  }
  @media(max-width: 768px) {
    width: 90%;
    border-radius: 15px;
  }
`

const HowToOrderBox = styled.div`
  width: 25%;
  height: auto;
  background-color: #F5EEE6;
  border-radius: 25px;
  margin-right: 5%;
  padding: 1%;
  @media(max-width: 1280px) {
    width: 80%;
    margin: 10% 0% 0% 0%;
    padding: 2%;
  }
  @media(max-width: 768px) {
    width: 90%;
    border-radius: 15px;
  }
`

const BoxTitle = styled.h2`
  text-align: center;
`

const BoxText = styled.p`
  text-align: justify;
  text-indent: 8%;
`

const YoutubeVideo = styled.div`
  width: 30%;
  @media(max-width: 1280px) {
    width: 80%;
  }
  @media(max-width: 768px) {
    width: 90%;
  }
`

export default function Home() {
  return(
    <GlobalContainer>

      <Carousel>
          <CarouselItem>
            <StyledCarouselItemImg alt="" />
          </CarouselItem> 
      </Carousel>

      <TitleCenter>

        <TitleBox>
          <MainTitle>Tristan Caillat</MainTitle>
          <StyledHr></StyledHr>
          <MainTitleSubtext>Artisan pâtissier sur Nice et ses environs</MainTitleSubtext>   
        </TitleBox>

      </TitleCenter>

      <InfosContainer>

        <PresentationBox>
          <BoxTitle>Qui-suis-je ?</BoxTitle>
          <BoxText>Je m’appelle Tristan et depuis petit j’ai toujours été attiré par la cuisine. C’est à 15 ans, lors d’un stage en entreprise, que j’ai découvert la pâtisserie. Dès lors, cela a été plus qu’une évidence pour moi.</BoxText>
          <BoxText>J’y ai découvert un univers où je pouvais laisser libre court à mon imagination et ai rapidement obtenu mon C.A.P Pâtissier/Chocolatier, puis je suis entré dans la vie active.</BoxText>
          <BoxText>Cela fait maintenant plus de 12 ans que j’exerce ce métier avec passion, cherchant sans cesse à me réinventer et à perfectionner mes créations.</BoxText>
        </PresentationBox>
        <YoutubeVideo>
        <YoutubeEmbed embedId="-HtBhn-XSxw?si=ytNNl_3ZRJ06Cd9y" />
        </YoutubeVideo>       
        <HowToOrderBox>
          <BoxTitle>Passer commande</BoxTitle>
          <BoxText>Je souhaite désormais redonner une définition à la pâtisserie en créant, pour vous, des gâteaux singuliers qui reflèteront vos envies et vos goûts.</BoxText> 
          <BoxText>Grâce à ma maîtrise, je vous offrirai une expérience unique alliant plaisir gustatif et un visuel remarquable.</BoxText> 
          <BoxText>À présent, c’est à vous de laisser parler votre imagination, et mon talent se chargera d’en faire une réalité.</BoxText>
          <BoxText>Pour me contacter, un clic sur les icônes présentes en bas de page vous renverra vers mes différents réseaux sociaux</BoxText>
        </HowToOrderBox>

      </InfosContainer>
      
    </GlobalContainer>
  )
}
