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
`

const TitleCenter = styled.div`
  display: flex;
  justify-content: center;
`

const TitleBox = styled.div`
  width: 22%;
  display: flex;
  position: absolute;
  padding: 0% 2% 0% 2%;
  top: 532px;
  flex-direction: column;
  background-color: #F5EEE6;
  border-radius: 10px;
`

const MainTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 45px;
`

const StyledHr = styled.hr`
  width: 150px;
  height: 3px;
  border-radius: 10px;
  background-color: #E6A4B4;
  border: none;
  margin-top: -10px;
`

const MainTitleSubtext = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
`

const InfosContainer = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PresentationBox = styled.div`
  width: 25%;
  height: 350px;
  background-color: #F5EEE6;
  border: 1px solid black;
  margin-left: 5%;
`

const HowToOrderBox = styled.div`
  width: 25%;
  height: 350px;
  background-color: #F5EEE6;
  border: 1px solid black;
  margin-right: 5%;
`

const YoutubeVideo = styled.div`
  width: 30%;
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
        </PresentationBox>
        <YoutubeVideo>
        <YoutubeEmbed embedId="2yJgwwDcgV8?si=g_Z7qB_ijtGRKmak" />
        </YoutubeVideo>       
        <HowToOrderBox>
          <h2>Passer commande</h2>
        </HowToOrderBox>

      </InfosContainer>
      
    </GlobalContainer>
  )
}
