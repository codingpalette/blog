import React from 'react';
import styled from 'styled-components';
import SliderItem from '../../Components/Home/SliderItem'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
    width:100%;
    height:100vh;
    overflow:hidden;
    box-sizing:border-box;
`;

const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
};

type HomePresenterProps = {
    slideItem : any[]
}


const HomePresenter = ({ slideItem } : HomePresenterProps) => {
    
    return(
        <>  
            <Container>  
                <Slider {...settings}>
                    {slideItem.map( (item) => (
                        <SliderItem 
                            key={item.id}
                            item={item}  
                        />
                    ))}
                    
                </Slider>
            </Container>
            
        </>
    )
};

export default HomePresenter