import React from 'react';
import styled from "styled-components";

const GlobalContainer = styled.div`
  width: 90%;
`
const StyledTitle = styled.h1`
  font-size: 40px;
  margin-left: 5.3%;
`
export default function Home() {
  return(
    <GlobalContainer>
      <StyledTitle>Tristan Caillat</StyledTitle>
    </GlobalContainer>
  )
}
