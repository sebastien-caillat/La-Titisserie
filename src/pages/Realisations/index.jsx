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
    @media(max-width: 1280px) {
      margin-top: 15%;
    }
    @media(max-width: 768px) {
      margin-top: 30%;
    }
`

const RealisationBanner = styled.img`
    width: 100%;
    height: 500px;
    margin-top: -40px;
    background-image: url("https://i.ibb.co/D7PjrXv/layercakebanner.webp");
    background-size: cover;
    background-position: 35% 35%;
    @media(max-width: 1280px) {
      height: 350px;
      margin-top: 35px;
    }
    @media(max-width: 768px) {
      height: 200px;
      margin-top: 110px;
      background-image: url("https://i.ibb.co/8zrpL7q/mobilelayercakebanner.webp");
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

const CategoryTitle = styled.h2`
  @media(max-width: 1280px) {
    display: flex;
    justify-content: center;
  }
`

const GlobalDessertSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media(max-width: 1280px) {
    justify-content: center;
  }
`

// A modifier lorsque plus de Numbers Cake seront introduits (remplacer par GlobalDessert Section et Item)

const GlobalNumbersCakeSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  @media(max-width: 1280px) {
    justify-content: center;
  }
`

const NumbersCakeItem = styled.div`
  width: 400px;
  height: 400px;
  background-color: #F5EEE6;
  border-radius: 30px;
  margin-bottom: 3%;
  margin-right: 2.5%;
  @media(max-width: 1280px) {
    margin:  0% 2% 8% 2%; 
  }
  @media(max-width: 768px) {
    margin: 0% 0% 8% 0%;
  }
`

const DessertItem = styled.div`
  width: 400px;
  height: 400px;
  background-color: #F5EEE6;
  border-radius: 30px;
  margin-bottom: 3%;
  // animation: desserts-apparition 1000ms ease-in-out forwards;
  @media(max-width: 1280px) {
    margin:  0% 2% 8% 2%; 
  }
  @media(max-width: 768px) {
    margin: 0% 0% 8% 0%;
  }
`

const DessertItemImg = styled.img`
  width: 100%;
  height: 60%;
  background-color: #252525;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  object-fit: cover;
`

const DessertItemInfos = styled.div`
  margin: 0% 3% 0% 3%;
  word-wrap: break-all;
`

const DessertItemTitle = styled.h3`
  font-family: "Alex Brush", cursive;
  font-size: 28px;
  margin-bottom: -10px;
  @media(max-width: 768px) {
    font-size: 23px;
    margin-bottom: -5px;
  }
`

const DessertItemSubtext = styled.p`
  line-height: 130%;
  text-align: left;
  @media(max-width: 768px) {
    font-size: 16px;
  }
`

// @keyframes desserts-apparition {
//   0% {
//     transform: translateY(-20px);
//   }
//   100% {
//     transform: translateY(0px);
//     opacity: 1;
//   }
// }

const classicDesserts = classicdessert;
const numberCakes = numbercakes;
const layerCakes = layercakes;

export default function Realisations() {
    return(
        <GlobalContainer>
            <RealisationBanner alt="layer cake banner"/>
            <TitleCenter>
                <TitleBox>
                    <MainTitle>Mes réalisations</MainTitle>
                    <StyledHr></StyledHr>
                    <MainTitleSubtext>Diverses & variées</MainTitleSubtext>
                </TitleBox>
            </TitleCenter>

            <MainContainer>
            <CategoryTitle>Les Classiques</CategoryTitle>
              <GlobalDessertSection>
                {classicDesserts.map(({ id, title, picture, description }) => (
                  <DessertItem key={id}>
                    <DessertItemImg src={picture} alt={title} />
                    <DessertItemInfos>
                      <DessertItemTitle>{title}</DessertItemTitle>
                      <DessertItemSubtext>{description}</DessertItemSubtext>
                    </DessertItemInfos>
                  </DessertItem>
                ))}
              </GlobalDessertSection>
            <CategoryTitle>Les Numbers Cakes</CategoryTitle>
              <GlobalNumbersCakeSection>
                {numberCakes.map(({ id, title, picture, description }) => (
                  <NumbersCakeItem key={id}>
                  <DessertItemImg src={picture} alt={title} />
                    <DessertItemInfos>
                      <DessertItemTitle>{title}</DessertItemTitle>
                      <DessertItemSubtext>{description}</DessertItemSubtext>
                    </DessertItemInfos>
                  </NumbersCakeItem>
                ))}
              </GlobalNumbersCakeSection>
            <CategoryTitle>Les Layers Cakes</CategoryTitle>
              <GlobalDessertSection>
                {layerCakes.map(({ id, title, picture, description }) => (
                  <DessertItem key={id}>
                  <DessertItemImg src={picture} alt={title} />
                    <DessertItemInfos>
                      <DessertItemTitle>{title}</DessertItemTitle>
                      <DessertItemSubtext>{description}</DessertItemSubtext>
                    </DessertItemInfos>
                  </DessertItem>
                ))}
              </GlobalDessertSection>
            </MainContainer>
        </GlobalContainer>
    )
}