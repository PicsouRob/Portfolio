import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
    padding: ${(props) => props.padding};
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const Button = styled.button`
    width: 140px;
    height: 30px;
    border-radius: 30px;
    margin: 8px 50px 8px 0;
    border: none;
    color: #242323;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    ${(props) => props.$bg && `
        background: #fccf58;
    `}
`;

export const TextStyle = styled.h1`
    font-size: 30px;
    color: #fccf58;
    font-weight: bold;
    ${(props) => props.$isMoreSize && `
        font-size: 50px;
        color: #242323;
        margin-top: -20px;
    `};
    ${(props) => props.$isRight && `
        text-align: right;
    `};
`;

export const RenderProject = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.width < 576 ? "auto" : props.width < 768 ? "auto auto" :  "auto auto auto"};
    gap: 10px 50px;
`;

export const ProjectContent = styled.div`
    background: #000 ${(props) => `url(${props.img})`};
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: ${(props) => props.height};
    border-radius: 10px;
    margin-top: 30px;
    transition: all .3s;
    overflow: hidden;
    position: relative;
    &:hover > div {
        display: block;
        bottom: 0px;
        background: rgba(0, 0, 0, 0.3);
    }
`;

export const Content = styled.div`
    margin-top: 170px;
`;

export const ButtonNextSelected = styled.div`
    display: flex;
    justify-content: center;
    padding: 60px 0;
`;

export const ImageContent = styled.div`
    position: absolute;
    bottom: -540px;
    padding: 0 20px;
    transition: all .4s ease-in-out;
    height: 300px;
`;

export const Text = styled.p`
    color: white;
    padding-right: 50px;
    margin: -15px 0 8px 0;
`;

export const DetailButton = styled.span`
    color: #ff9f43;
    font-weight: bold;
`;

export const ButtonNumber = styled.button`
    width: 40px;
    height: 40px;
    background: transparent;
    cursor: pointer;
    border-radius: 50px;
    border-width: 1px;
    border-color: #fccf58;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    font-weight: 600;
    ${(props) => props.$isSelected && `
        background: #fccf58;
    `}
`;