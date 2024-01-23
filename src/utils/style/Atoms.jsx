import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
    font-size: 22px;
    margin: 0px 10px 0px 10px;
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    &:hover{
        text-decoration-line: underline;
    }
`