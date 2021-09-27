import React from 'react';
import { servicesData } from '../../Helpers/data';
import { useWidth, HeaderDescription, AboutMe } from '../../Styles/GlobalStyleWrapper';
import { CardText } from '../Work/WorkStyle';
import { ServicesWrapper, ServicesContainer } from './ServicesStyle';

function Services() {
    const { width } =  useWidth();

    return (
        <ServicesWrapper width={width} id='services'>
            <HeaderDescription header="Provided" width={width}
                bottom="Services" isRight={false}
            ></HeaderDescription>
            <ServicesContainer>
                {servicesData.map((items, index) => (
                    <div key={index} style={{ width: 260, marginBottom: 20 }}>
                        <img src={items.image} alt={items.name} width={80} height={80} />
                        <CardText>{items.name}</CardText>
                        <AboutMe>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum velit.</AboutMe>
                    </div>
                ))}
            </ServicesContainer>
        </ServicesWrapper>
    )
}

export default Services;