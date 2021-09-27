import React, { useState, useEffect } from 'react';
import { workData } from '../../Helpers/data';
import {
    WorkWrapper, WorkContainer,
    Card, CardText, RightContainer, Button, Dot
} from './WorkStyle';
import { useWidth, HeaderDescription } from '../../Styles/GlobalStyleWrapper';
import Carousel, { consts } from 'react-elastic-carousel';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

function Work() {
    const { width } = useWidth();
    const [cardWidth, setCardWidth] = useState("300px");

    const handleSlide = () => {
        if (width < 576) {
            setCardWidth("300px");
        } else if (width < 768) {
            setCardWidth("300px");
        } else if (width < 992) {
            setCardWidth("200px");
        } else {
            setCardWidth("340px");
        }
    }

    useEffect(() => {
        handleSlide();
    }, [width]);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 576, itemsToShow: 2 },
        { width: 992, itemsToShow: 3 },
    ];

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <FaAngleLeft size={20} /> : <FaAngleRight size={20} />

        return (
            <Button onClick={onClick} disabled={isEdge}>
                <div>{pointer}</div>
            </Button>
        )
    }

    return (
        <WorkWrapper width={width} id="work">
            <WorkContainer>
                <RightContainer>
                    <HeaderDescription header="My Work" width={width}
                        bottom="Experties" isRight={true} isYellow={true}
                    ></HeaderDescription>
                </RightContainer>
                <Carousel breakPoints={breakPoints}
                    renderArrow={myArrow}
                    enableAutoPlay autoPlaySpeed={4000}
                    renderPagination={({ pages, activePage, onClick }) => {
                        return (
                            <div style={{ display: "flex" }}>
                                {pages.map(page => {
                                    const isActivePage = activePage === page
                                    return (
                                        <Round
                                            key={page}
                                            onClick={() => onClick(page)}
                                            active={isActivePage}
                                        />
                                    )
                                })}
                            </div>
                        )
                    }}
                >
                    {workData.map((items, index) => (
                        <Card key={index} width={cardWidth}>
                            <CardText>{items.year}</CardText>
                            <CardText>{items.name}</CardText>
                            <span>{items.job}</span>
                        </Card>
                    ))}
                </Carousel>
            </WorkContainer>
        </WorkWrapper>
    )
}

const Round = (props) => {
    const { active } = props;

    return (
        <Dot active={active}></Dot>
    )
}

export default Work;