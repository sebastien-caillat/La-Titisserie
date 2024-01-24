import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
    font-size: 22px;
    margin: 0px 0px 0px 80px;
    text-decoration: none;
    &:visited{
        color: ${colors.primary};
    }
    &:hover{
        border-bottom: 2px solid #E6A4B4;
    }
`