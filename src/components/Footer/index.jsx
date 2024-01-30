import React from "react";
import styled from "styled-components"

import { FaTiktok, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const InstagramUrl = 'https://www.instagram.com/titi.patisserie/';
const TiktokUrl = 'https://www.tiktok.com/@titisserie';

const Box = styled.div`
    background: #E6A4B4;
    position: absolute;
    width: 100%;
`;
 
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;
 
const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`;
 
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 1280px) {
        justify-content: space-around;
    }
`;

const StyledFooterTitle = styled.h3`
    font-size: 45px;
    font-family: 'Alex Brush', cursive;
    text-align: center;
    margin-bottom: 15px;
`

const StyledHr = styled.hr`
  width: 150px;
  height: 3px;
  border-radius: 10px;
  background-color: #F3D7CA;
  border: none;
`

const ContactIcons = styled.div`
    width: 4vh;
    height: 4vh;
    font-size: 35px;
    color: #fff;
    margin: 30px 0px 30px 0px;
    &:hover {
        font-size: 40px;
    }
`;

export default function Footer() {
    return(
        <Box>
            <StyledFooterTitle>
                Me contacter
            </StyledFooterTitle>
            <StyledHr></StyledHr>
            <FooterContainer>
                <Row>
                    <Column>
                        <ContactIcons onClick={() => { window.location.href = InstagramUrl; } }>
                            <FaInstagram />
                        </ContactIcons>
                    </Column>
                    <Column>
                        <ContactIcons onClick={() => { window.location.href = TiktokUrl; } }>
                            <FaTiktok />
                        </ContactIcons>
                    </Column>
                    <Column>
                        <ContactIcons>
                            <IoMdMail onClick={() => { window.location.href = 'mailto:tris.caillat@gmail.com' } } />
                        </ContactIcons>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
