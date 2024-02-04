import React from "react";
import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`

    /* Alex Brush Font */

    @font-face {
    font-family: 'Alex Brush';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/alexbrush/v22/SZc83FzrJKuqFbwMKk6EhUXz7Q.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    * {
        font-family: 'Varela Round', sans-serif;
    }

    body {
        color: ${colors.primary};
        background-color: ${colors.background};
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: auto;
    }

    h1, h2 {
        font-family: 'Alex Brush', cursive;
    }

    h2 {
        font-size: 35px;
    }

    p {
        font-size: 18px;
        // text-align: justify;
    }
`

export default function GlobalStyle() {
    return <StyledGlobalStyle />
}
