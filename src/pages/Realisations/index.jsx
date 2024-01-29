import React from "react";
import styled from "styled-components";
import classicdessert from "../../assets/data/classicdessert.json";
import numbercakes from "../../assets/data/numbercakes.json";
import layercakes from "../../assets/data/layercakes.json";

const GlobalContainer = styled.div`
    width: 100%;
`

const MainContainer = styled.div`
    height: auto;
    margin: 6% 5% 6% 5%;
`

const RealisationBanner = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: 35% 35%;
    margin-top: -40px;
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
  @media(max-width: 768px) {
    width: 90%;
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

const GlobalDessertSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const DessertItem = styled.div`
  width: 400px;
  height: 400px;
  background-color: #F5EEE6;
  border-radius: 30px;
  margin-bottom: 3%;
`

const DessertItemImg = styled.div`
  width: 100%;
  height: 60%;
  background-color: #252525;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  object-fit: cover;
`

const DessertItemInfos = styled.div`
  margin: 0% 3% 0% 3%;
`

const DessertItemTitle = styled.h3`
  font-family: "Alex Brush", cursive;
  font-size: 28px;
  margin-bottom: -10px;
`

const classicDesserts = classicdessert;
const numberCakes = numbercakes;
const layerCakes = layercakes;


export default function Realisations() {
    return(
        <GlobalContainer>
            <RealisationBanner src="https://i.ibb.co/db87T32/layer-cake-2.jpg" />
            <TitleCenter>
                <TitleBox>
                    <MainTitle>Mes réalisations</MainTitle>
                    <StyledHr></StyledHr>
                    <MainTitleSubtext>Diverses et variées</MainTitleSubtext>
                </TitleBox>
            </TitleCenter>

            <MainContainer>
            <h2>Les Classiques</h2>
              <GlobalDessertSection>
                {classicDesserts.map(({ id, title, picture, description }) => (
                  <DessertItem key={id}>
                    <DessertItemImg src={picture} alt={title} />
                    <DessertItemInfos>
                      <DessertItemTitle>{title}</DessertItemTitle>
                      <p>{description}</p>
                    </DessertItemInfos>
                  </DessertItem>
                ))}
              </GlobalDessertSection>
            <h2>Les Numbers Cakes</h2>
              <GlobalDessertSection>
                {numberCakes.map(({ id, title, picture, description }) => (
                  <DessertItem key={id}>
                  <DessertItemImg src={picture} alt={title} />
                    <DessertItemInfos>
                      <DessertItemTitle>{title}</DessertItemTitle>
                      <p>{description}</p>
                    </DessertItemInfos>
                  </DessertItem>
                ))}
              </GlobalDessertSection>
            <h2>Les Layers Cakes</h2>
              <GlobalDessertSection>
                {layerCakes.map(({ id, title, picture, description }) => (
                  <DessertItem key={id}>
                  <DessertItemImg src={picture} alt={title} />
                    <DessertItemInfos>
                      <DessertItemTitle>{title}</DessertItemTitle>
                      <p>{description}</p>
                    </DessertItemInfos>
                  </DessertItem>
                ))}
              </GlobalDessertSection>
            </MainContainer>
        </GlobalContainer>
    )
}