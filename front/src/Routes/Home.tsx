import React , { useState } from 'react';
import styled from 'styled-components';
import SliderItem from '../Components/Home/SliderItem'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type slideItemType = {
    id : number,
    link : string,
    title : string,
    text : string,
    link_text : string,
    bgImg : string
};

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

const Home = () => {

    const [slideItem] = useState([
        {
            id : 1,
            link: '/blog',
            title : 'Web Development',
            text : '웹 개발자 이성재 입니다.',
            link_text : '소개 바로가기',
            bgImg : require("../assets/main_img1.svg")
        },
        {
            id : 2,
            link: '/blog',
            title : 'aaaa',
            bgImg : require("../assets/main_img2.svg")
        },
        {
            id : 3,
            link: '/blog',
            title : 'aaaa',
            bgImg : require("../assets/main_img3.svg")
        }
    ] as slideItemType[])


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

export default Home;