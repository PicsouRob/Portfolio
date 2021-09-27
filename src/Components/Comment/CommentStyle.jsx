import styled from 'styled-components';

export const CommentWrapper = styled.div`
    padding: 30px ${(props) => props.padding};
`;

export const CommentContainer = styled.div`
    padding-top: 70px;
`;

export const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${(props) => props.width < 990 ? "column" : "row"};
    margin: 30px 0 20px 0;
`; 

export const ImgCarousel = styled.img`
    width: 400px;
    border-radius: 25px;
`;