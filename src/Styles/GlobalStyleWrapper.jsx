import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export const GlobalWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    ${(props) => props.$isBgColor && `
        background: rgba(255, 249, 247, 0.4);
    `}
`;

export const GlobalContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => props.width < 990 ? "column" : "row"};
    justify-content: space-between;
    align-items: center;
`;

export const TextStyle = styled.h1`
    font-size: ${(props) => props.width < 768 & props.$isMoreSize ? "40" : props.width >= 768 & props.$isMoreSize ? "50" : "30"}px;
    color: ${(props) => props.header === "My Work" ? "#fff" : "#fccf58"};
    font-weight: bold;
    ${(props) => props.$isMoreSize && `
        color: #242323;
        margin-top: -20px;
    `};
    ${(props) => props.$iswhite && `
        color: #fff;
        text-align: right;
    `};
    ${(props) => props.isYellow === true && `
        color: #fccf58;
        text-align: right;
    `}
    ${(props) => props.isRight === true && `
        text-align: right;
    `}
`;

export const Bar = styled.div`
    width: 80px;
    height: 8px;
    background-color: #fccf58;
    margin-top: -20px;
    position: relative;
    ${(props) => props.isRight === true && `
        float: right;
    `}
`;

export const AboutMe = styled.p`
    color: #242323;
    line-height: 30px;
    font-size: 18px;
`;

const DescriptionWrapper = styled.div`
    float: ${(props) => props.isRight === true ? "right" : "none"};
    display: flex;
    flex-direction: ${(props) => props.isRight === true ? "row-reverse" : "row"};
    align-items: center;
`;

export function HeaderDescription(props) {
    const { header, bottom, isRight, width, isYellow, widthImage } = props;

    return (
        <DescriptionWrapper isRight={isRight}>
            <div>
                <TextStyle isRight={isRight} header={header}>{header}</TextStyle>
                <TextStyle $isMoreSize isYellow={isYellow} width={width}>{bottom}</TextStyle>
                <Bar widthImage={widthImage} isRight={isRight}></Bar>
            </div>
            <div>
                <AnimationPoint isYellow={isYellow}></AnimationPoint>
            </div>
        </DescriptionWrapper>
    )
}

const animation = keyframes`
    0% {transform: translateX(0px); }
    75% {transform: translateX(20px); }
    100% {transform: translateX(-10px); }
`;

const Animation = styled.div`
    width: 100px;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    gap: 15px 5px;
    margin: 0 15px;
    animation: ${animation} 2s infinite;
    & div {
        width: 5px;
        height: 5px;
        background: ${(props) => props.isYellow === true ? "#fff" : "#fccf58"};
        border-radius: 10px;
    };
`;

const animeArray = [1, 2, 3, 4, 5, 6, 77, 22, 11, 12, 31, 9, 43, 99, 29, 32, 70, 40];

export function AnimationPoint(props) {
    const { isYellow } = props;

    return (
        <Animation isYellow={isYellow}>
            {animeArray.map((items, index) => (
                <div key={index}></div>
            ))}
        </Animation>
    )
}

export function useWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    const [padding, setPadding] = useState("0 80px");
    const [heightImage, setHeightImage] = useState("440px");
    const [imageWidth, setImageWidth] = useState("350px")

    const checkWidth = () => {
        setWidth(window.innerWidth);
    }

    const widthImage = () => {
        if(width > 768 & width < 960) {
            setImageWidth("225px");
            setPadding("30px");
            setHeightImage("280px");
        } else if(width < 576) {
            setImageWidth(`${width - 50}px`);
            setPadding("20px");
            setHeightImage("450px");
        } else if(width > 576 & width < 768) {
            setImageWidth("220px");
            setPadding("50px");
            setHeightImage("320px");
        } else if(width > 960 & width < 1140) {
            setImageWidth("280px");
            setPadding("30px");
            setHeightImage("380px");
        } else if(width > 1140) {
            setImageWidth("330px");
            setPadding("80px");
            setHeightImage("380px");
        }
    }
    
    useEffect(() => {
        checkWidth();
        widthImage();
        window.addEventListener('resize', checkWidth);
    }, [width]);

    return { width, padding, imageWidth, heightImage };
}