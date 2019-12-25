import React , { useState } from 'react';
import HomePresenter from './HomePresenter';

type slideItemType = {
    id : number,
    link : string,
    title : string,
    text : string,
    link_text : string,
    bgImg : string
}

const HomeContainer = () => {

    const [slideItem] = useState([
        {
            id : 1,
            link: '/blog',
            title : 'Web Development',
            text : '웹 개발자 이성재 입니다.',
            link_text : '소개 바로가기',
            bgImg : require("../../assets/main_img1.svg")
        },
        {
            id : 2,
            link: '/blog',
            title : 'aaaa',
            bgImg : require("../../assets/main_img2.svg")
        },
        {
            id : 3,
            link: '/blog',
            title : 'aaaa',
            bgImg : require("../../assets/main_img3.svg")
        }
    ] as slideItemType[])


    return(
        <>
            <HomePresenter
                slideItem={slideItem}
            />
        </>
    )
};

export default HomeContainer;