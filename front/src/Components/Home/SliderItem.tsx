import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';

interface imgUrlPropsType {
	imgUrl?: string,
}

const Line = styled.span`
    display: block;
    position: absolute;
    background-color: #ec407a;
`;

const Line1 = styled(Line)`
    top: 0;
    left: 0;
    height: 5px;
    width: 0;
`;

const Line2 = styled(Line)`
    top: 0;
    right: 0;
    height: 0;
    width: 5px;
`;

const Line3 = styled(Line)`
    bottom: 0;
    right: 0;
    height: 5px;
    width: 0;
`;

const Line4 = styled(Line)`
    bottom: 0;
    left: 0;
    height: 0;
    width: 5px;
`;

const Screen = styled.div<imgUrlPropsType>`
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px;
    box-sizing:border-box;
    width:100%;
    height:100vh;
    margin: auto;
    background-image:url( ${props => props.imgUrl } ) ;
    background-size:cover;
    background-position:center center;

    &::before{
        content:'';
        display:block;
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,0.5);
    }
    
`;

const TextBox = styled.div`
    position:relative;
    width:100%;
    max-width:350px;
    margin:auto;
    background-color:rgba(255,255,255,0.8);
    /* border-radius: 6px;
    box-shadow: 0 6px 28px 0 rgba(24, 52, 117, 0.2);
    transition: all 200ms ease; */
    z-index:100;
    transition:background-color 0.2s;
    &:before{
        content:'';
        display:block;
        width:100%;
        padding-bottom:100%;
    }
    &:hover{
        background-color:#FFF;
        ${Line1}{
            width: 100%;
            transition: all 0.5s;
        }
        ${Line2}{
            height: 100%;
            transition: all 0.5s;
            transition-delay: 0.5s;
        }
        ${Line3}{
            width: 100%;
            transition: all 0.5s;
            transition-delay: 1s;
        }
        ${Line4}{
            height: 100%;
            transition: all 0.5s;
            transition-delay: 1.5s;
        }
    }
`;

const TextContent = styled.div`
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    padding:20px;
    box-sizing:border-box;
`;

const PlusBtn = styled.span`
    display:block;
    width:25px;
    height:25px;
    margin-top:auto;
    position:relative;
    transition: 0.3s;
`;

const LinkTo = styled(Link)`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    text-decoration:none;
    color:inherit;
    &:hover{
        ${PlusBtn}{
            transform:rotate(360deg);
        }
    }
`

const PlusLine = styled.span`
    position:absolute;
    left:0;
    top:50%;
    width:100%;
    height:3px;
    background-color:#ec407a;
`;

const PlusLine1 = styled(PlusLine)`
    transform:rotate(90deg);
`;

type SliderItemProps = {
    item : {
        id : number,
        link : string,
        title : string,
        text : string,
        link_text : string,
        bgImg : string
    }
}

const SliderItem = ( { item } : SliderItemProps) => {
    return(
        <>
            <Screen
                imgUrl={item.bgImg}
            >
                <TextBox>
                    <TextContent>
                        <LinkTo to={item.link}>
                            <Typography variant="h4" component="h3">
                                {item.title}
                            </Typography>
                            <Typography component="p">
                                {item.text}
                            </Typography>
                            <PlusBtn>
                                <PlusLine></PlusLine>
                                <PlusLine1></PlusLine1>
                            </PlusBtn>
                        </LinkTo>
                    </TextContent>
                    <Line1></Line1>
                    <Line2></Line2>
                    <Line3></Line3>
                    <Line4></Line4>
                </TextBox>
                
            </Screen>
        </>
    )
}

export default SliderItem;