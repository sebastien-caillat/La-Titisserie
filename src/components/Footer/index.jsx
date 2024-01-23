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
    bottom: 0;
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
    margin-right: 25px;
`;
 
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledFooterTitle = styled.h3`
    font-size: 30px;
    margin-top: 30px;
    text-align: center;
`

const IconText = styled.p`
    font-size: 20px;
    text-align: center;
`

const ContactIcons = styled.div`
    width: 4vh;
    height: 4vh;
    font-size: 35px;
    color: #fff;
    margin: 0px 0px 20px 0px;
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
            <FooterContainer>
                <Row>
                    <Column>
                        <IconText>Instagram</IconText>
                        <ContactIcons onClick={() => { window.location.href = InstagramUrl; } }>
                            <FaInstagram />
                        </ContactIcons>
                    </Column>
                    <Column>
                        <IconText>TikTok</IconText>
                        <ContactIcons onClick={() => { window.location.href = TiktokUrl; } }>
                            <FaTiktok />
                        </ContactIcons>
                    </Column>
                    <Column>
                        <IconText>Mail</IconText>
                        <ContactIcons>
                            <IoMdMail onClick={() => { window.location.href = 'mailto:triss.caillat@gmail.com' } } />
                        </ContactIcons>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
