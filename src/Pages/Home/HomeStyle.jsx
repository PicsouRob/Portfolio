import styled from 'styled-components';

const h1 = (screen) => {
    let size;
    if(screen < 576){
        size = "30px";    
    } else if(screen > 576){
        size = "35px";
    } else if(screen > 768) {
        size = "25px"
    } else if(screen > 992) {
        size = "25px"
    } else if(screen > 1200) {
        size = "65px"
    } 

    return size;
} 

export const padding = (screen) => {
    let size;
    if(screen < 576){
        size = "0 25px";    
    } else if(screen > 576){
        size = "0 80px";
    } else if(screen > 768) {
        size = "0 70px"
    } else if(screen > 992) {
        size = "0 90px"
    } else if(screen > 1200) {
        size = "0 120px"
    } 

    return size;
} 



export const HomeWrapper = styled.div`
    position: relative;
    display: flex;
    height: ${window.innerHeight - 90}px;
    background-color: #fccf58;
    align-items: center;
    padding: ${(props) => padding(props.width)};
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => props.width < 768 ? "column" : "row"};
    align-items: center;
    justify-content: space-between;
`;

export const DescriptorStyle = styled.h1`
    font-weight: bold;
    color: #242323;
    display: flex;
    flex-direction: row;
    font-size: ${(props) => h1(props.width)};
`;

export const SocialIconContent = styled.div`
    margin-top: 10px;
`;

export const InfoStyle = styled.p`
    font-size: 18px;
    color: #292828;
`;

export const TextStyle = styled.div`
`;

export const ButtonStyle = styled.button`
    padding: 16px 35px;
    background-color: #242323;
    color: white;
    border-radius: 30px;
    border: transparent;
    margin-top: 20px;
    font-size: 16px;
    font-weight: bold;
    box-shadow:  0px -16px 100px #fccf58,
             0 -16px 100px #fccf58;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: gray;
    }
`;