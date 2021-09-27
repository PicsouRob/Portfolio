import styled from 'styled-components';
import image from '../../assets/bg.jpg';
import { padding } from '../Skills/SkillsStyle';

export const WorkWrapper = styled.div`
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: ${window.innerHeight}px;
    padding: ${(props) => padding(props.width)}
`;

export const WorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

export const RightContainer = styled.div`
    padding-bottom: 50px;
`; 

export const Card = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 15px;
    border-radius: 20px;
    scroll-snap-align: start;
    &:hover {
        background-color: #fccf58;
    }
`;

export const CardText = styled.h1`
    font-size: 22px;
    color: #242323;
`;

export const Button = styled.button`
    background: none;
    border: none;
    font-size: 9px;
    & div:hover {
        background-color: #fccf58;
        cursor: pointer;
    };
    & div {
        width: 30px;
        height: 30px;
        background-color: #fff;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    };
`;

export const Dot = styled.div`
    width: 10px; 
    height: 10px; 
    background: ${(props) => props.active === true ? "#fccf58" : "#fff"};
    border-radius: 10px;
    margin-right: 10px;
`;