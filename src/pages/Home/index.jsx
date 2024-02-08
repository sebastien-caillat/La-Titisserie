import React, { useState } from 'react';
import styled from "styled-components";

import Carousel from "../../components/Carousel";
import { CarouselItem } from "../../components/Carousel";

import youtube_play_dark from "../../assets/youtube/youtube_play_dark.svg";
import youtube_play_red from "../../assets/youtube/youtube_play_red.svg";

const GlobalContainer = styled.div`
  width: 100%;
`

const StyledCarouselItemImg = styled.img`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 100%;
    background-image: url("https://i.ibb.co/KLgs8ff/entremets-coeurs.webp");
    background-size: cover;
    background-position: 50% 50%;
    @media(max-width: 1280px) {
      height: 350px;
    }
    @media(max-width: 768px) {
      height: 200px;
      background-image: url("https://i.ibb.co/tqw00pp/entremets-coeurs-responsive.webp"); 
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


// Youtube Video related elements //

const Video = styled.div`
  position: relative;
  width: 30%;
`

const YoutubeVideo = styled.div`
  padding-bottom: 56.23%;
  width: 100%;
  height: 0;
  overflow: hidden;
  position: relative;
  object-fit: cover;
  background-color: black;
  @media(max-width: 1280px) {
    width: 80%;
  }
  @media(max-width: 768px) {
    width: 90%;
  }
`

const VideoIframe= styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const VideoPlaceHolder = styled.img`
  width: 100%;
  position: absolute;
`

const VideoButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 100%;
  left: 0;
  position: absolute;
  text-indent: -9999px;
  top: 0;
  transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  width: 100%;
  &:before {
    width:100%;
    height:100%;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${youtube_play_dark}) no-repeat center center;
    background-size: 15%; 
  }
  &:hover:before {
    background: url(${youtube_play_red}) no-repeat center center;
    background-size: 15%; 
  }
`

export default function Home() {

  const [reading, setReading] = useState(false);
  const toggle = () => {
    setReading(!reading);
  };

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

        <Video>
            <YoutubeVideo class="video__youtube" data-youtube>
                <VideoPlaceHolder src="https://i.ytimg.com/vi/-HtBhn-XSxw/maxresdefault.jpg" />
                <VideoButton data-youtube-button="https://www.youtube.com/embed/-HtBhn-XSxw?si=idOWlRJpINw9VtIw" onClick={toggle}></VideoButton>
                {reading &&
                  <VideoIframe src="https://www.youtube.com/embed/-HtBhn-XSxw?si=idOWlRJpINw9VtIw?autoplay=1" frameborder="0" allowfullscreen></VideoIframe>
                }
            </YoutubeVideo>
        </Video>

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
