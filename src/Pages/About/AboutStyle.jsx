import styled from 'styled-components';

export const AboutWrapper = styled.div`
    padding: 90px ${(props) => props.padding} ;
`;

export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: ${(props) => props.width < 768 ? "auto" : "auto auto"};
    gap: 10px 50px;
`; 

export const ImageContaint = styled.img`
    width: ${(props) => props.width > 768 ? "500px" : "310px"};
    height: 500px;
    border-radius: 30px;
    margin: -125px 0px 0 50px;
    display: flex;
`;

export const BottomContainer = styled.span`
    display: flex;
    flex-direction: column;
`;

export const SquareStyle = styled.div`
    width: 200px;
    height: 150px;
    background-color: #fad390;
    border-radius: 30px;
    margin-left: 30px;
`;

export const TextBottom = styled.span`
    padding: 5px 0px;
    color: #242323;
`;