import styled from 'styled-components';

const padding = (screen) => {
    let size;
    if(screen < 576) {
        size = 30;    
    } else if(screen < 768) {
        size = 110;
    } else if(screen < 992) {
        size = 100;
    } else  {
        size = 100;
    } 

    return size;
}

export const BlogWrapper = styled.div`
    padding: 35px ${(props) => padding(props.width)}px;
    display: "flex",
    flex-direction: column;
    align-items: "center",
`;

export const BlogContainer = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.width < 768 ? "auto" : props.width < 992 ? "auto auto" :  "auto auto auto"};
    gap: 30px 30px;
    margin: 70px 0;
`;

export const BlogImage = styled.img`
    width: 100%;
    height: ${(props) => props.width < 768 ? "295px" : "225px"};
    border-radius: 30px 30px 0 0;
    transition: all 0.3s;
`;
    
export const BlogContent = styled.div`
    height: ${(props) => props.width < 768 ? "590px" : "450px"};
    margin-bottom: ${(props) => props.width < 768 ? "60px" : "40px"};
    background: #fff;
    border-radius: 30px;
    &:hover div {
        background: rgba(255, 251, 250, 0.9);
    }
    &:hover img {
        transform: scale(1.5);
    }
    &:hover button {
        color: #ff9f43;
    }
`;

export const BlogText = styled.div`
    box-shadow: 0 1px 40px  #afafaf,
                0 1px 40px #fff;
    padding: 20px;
    border-radius: 0 0 30px 30px;
    margin-top: -15px;
`;

export const Button = styled.button`
    font-weight: bold;
    color: #fccf58;
    border: none;
    background: none;
    font-size: 17px;
`;