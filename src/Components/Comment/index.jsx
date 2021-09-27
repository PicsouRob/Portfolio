import React from 'react';
import { commentData } from '../../Helpers/commentApi';
import { useWidth, AboutMe, HeaderDescription } from '../../Styles/GlobalStyleWrapper';
import { CarouselContainer, ImgCarousel, CommentWrapper } from './CommentStyle';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Comment() {
    const { width, padding } =  useWidth();

    return (
        <CommentWrapper padding={padding} $isBgColor>
            <div>
                <HeaderDescription header="What My" width={width}
                    bottom="Client Say" isRight={false}
                ></HeaderDescription>
                <Carousel 
                    autoPlay swipeable emulateTouch interval={4000}
                    showStatus={false}
                >
                    {commentData.map((items, index) => (
                        <CarouselContainer key={index} width={width}>
                            <div style={{ paddingBottom: 20, marginRight: 50 }}>
                                <ImgCarousel src={items.img} alt={items.name}/>
                            </div>
                            <div>
                                <h2 style={textAlign}>{items.name}</h2>
                                <h4 style={textAlign}>{items.title}</h4>
                                <AboutMe style={textAlign}>{items.comment}</AboutMe>
                            </div>
                        </CarouselContainer>
                    ))}
                </Carousel>
            </div>
        </CommentWrapper>
    )
}

const textAlign = {
    textAlign: "left",
    color: '#242323',
}

export default Comment;
