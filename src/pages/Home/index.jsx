import React from 'react';
import styled from "styled-components";
import Carousel from "../../components/Carousel";
import { CarouselItem } from "../../components/Carousel";

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

const InfosContainer = styled.div`
  height: 700px;
`

const TitleBox = styled.div`
  width: 22%;
  display: flex;
  position: absolute;
  padding: 0% 2% 0% 2%;
  top: 532px;
  left: 710px;
  right: 710px;
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
      <TitleBox>
        <MainTitle>TRISTAN CAILLAT</MainTitle>
        <StyledHr></StyledHr>
        <MainTitleSubtext>Artisan pâtissier sur Nice et ses environs</MainTitleSubtext>   
      </TitleBox>                        
      <InfosContainer>
      </InfosContainer>
    </GlobalContainer>
  )
}
