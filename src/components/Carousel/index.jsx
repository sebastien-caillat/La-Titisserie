import React from "react";
import styled from "styled-components";

// Carousel inactif pour le moment, en attente d'images de meilleures qualités à implémenter

const StyledCarouselItem = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 500px;
`
const StyledCarousel = styled.div`
    overflow: hidden;
    width: 100%;
    margin-top: -40px;
`
const StyledInner = styled.div`
    white-space: nowrap;
    transition: transform 0.3s;
`

export const CarouselItem = ({ children, width }) => {
    return (
        <StyledCarouselItem style={{ width: width }}>
            {children}
        </StyledCarouselItem>
    )
}

function Carousel({ children }) {
    
    // const [activeIndex, setActiveIndex] = useState(0);

    // const updateIndex = (newIndex) => {
    
    //     if(newIndex < 0) {
    //         newIndex = React.Children.count(children) -1;
    //     } else if (newIndex > React.Children.count(children) -1) {
    //         newIndex = 0;
    //     } 

    //     setActiveIndex(newIndex);
    // }

    return(
        <StyledCarousel>
            <StyledInner>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: '100%' });
                })}
            </StyledInner>
        </StyledCarousel>
    )
}

export default Carousel