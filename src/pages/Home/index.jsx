import React from 'react';
import styled from "styled-components";
import Carousel from "../../components/Carousel";
import { CarouselItem } from "../../components/Carousel";
import { YoutubeEmbed } from '../../assets/YoutubeEmbed';

const GlobalContainer = styled.div`
  width: 100%;
`

const StyledCarouselItemImg = styled.img`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    object-fit: cover;
    width: 100%;
    @media(max-width: 1280px) {
      height: 350px;
    }
    @media(max-width: 768px) {
      height: 200px;
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
  border: 1px solid black;
  border-radius: 25px;
  margin-left: 5%;
  padding: 1%;
  @media(max-width: 1280px) {
    width: 80%;
    margin: 0% 0% 10% 0%;
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
  border: 1px solid black;
  border-radius: 25px;
  margin-right: 5%;
  padding: 1%;
  @media(max-width: 1280px) {
    width: 80%;
    margin: 10% 0% 0% 0%;
  }
  @media(max-width: 768px) {
    width: 90%;
  }
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

const illustrations = [
  {
      imgUrl: "https://i.ibb.co/zfhPbQX/entrem-ts-coeurs.jpg",
      title: "Entremêts_coeurs"
  },

  {
      imgUrl: "https://i.ibb.co/LRBjndX/maisonnette-pate-sucr-e.jpg",
      title: "Maisonnette en pâte sucrée"
  },

  {
      imgUrl: "https://i.ibb.co/VLwkmr4/tartelette-citron-meringu.jpg",
      title: "Tartelettes citron meringuées"
  },

  {
      imgUrl: "https://i.ibb.co/Jpq5wr4/meringues.jpg",
      title: "Meringues"
  },
 
]

export default function Home() {
  return(
    <GlobalContainer>

      <Carousel>
        {illustrations.map(({imgUrl, title }) => (
          <CarouselItem>
            <StyledCarouselItemImg src={imgUrl} alt={title} />
          </CarouselItem> 
        ))}  
      </Carousel>

      <TitleCenter>

        <TitleBox>
          <MainTitle>TRISTAN CAILLAT</MainTitle>
          <StyledHr></StyledHr>
          <MainTitleSubtext>Artisan pâtissier sur Nice et ses environs</MainTitleSubtext>   
        </TitleBox>

      </TitleCenter>

      <InfosContainer>

        <PresentationBox>
          <h2>Qui-suis-je ?</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </PresentationBox>
        <YoutubeVideo>
        <YoutubeEmbed embedId="-HtBhn-XSxw?si=ytNNl_3ZRJ06Cd9y" />
        </YoutubeVideo>       
        <HowToOrderBox>
          <h2>Passer commande</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </HowToOrderBox>

      </InfosContainer>
      
    </GlobalContainer>
  )
}
