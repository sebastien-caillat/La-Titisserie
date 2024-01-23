import React from "react";
import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'League Spartan', serif, sans-serif;
    }

    body {
        color: ${colors.primary};
        background-color: ${colors.background};
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: auto;
    }

    p {
        font-size: 18px;
        text-align: justify;
    }
`

export default function GlobalStyle() {
    return <StyledGlobalStyle />
}
