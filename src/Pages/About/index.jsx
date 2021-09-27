import React from 'react';
import aboutPhoto from '../../assets/about.jpg';
import { useWidth, HeaderDescription, AboutMe } from '../../Styles/GlobalStyleWrapper';
import { AboutWrapper, ImageContaint, BottomContainer, TextBottom, SquareStyle , AboutContainer
} from './AboutStyle';

function About() {
    const { width, padding } = useWidth();

    return (
        <AboutWrapper padding={padding} id="about">
            <AboutContainer width={width}>
                <div style={{  }}>
                    <SquareStyle></SquareStyle>
                    <ImageContaint width={width - padding} src={aboutPhoto} alt='about' />
                </div>
                <div style={{ display: "flex", margin: "0px 0px 0 30px" }}>
                    <div>
                        <HeaderDescription header="Know" width={width}
                            bottom="Abbout Me" isRight={false}
                        ></HeaderDescription>
                        <AboutMe>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue nulla. Vivamus lorem felis, imperdiet et imperdiet vel, iaculis at nunc. Curabitur pharetra purus a turpis consequat ultricies condimentum nec nibh. Nullam a egestas nulla. Nulla ut ultricies lectus. Suspendisse vulputate a risus eget euismod. Nam ut nisi leo. Aenean eros turpis, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue nulla.</AboutMe>
                        <BottomContainer>
                            <TextBottom><strong>Profession : </strong>UI/UX DESIGNER</TextBottom>
                            <TextBottom><strong>Email : </strong>frederico@gmail.com</TextBottom>
                            <TextBottom><strong>Skype : </strong>fredericoch</TextBottom>
                            <TextBottom><strong>Phn No : </strong>+1 478 434555</TextBottom>
                        </BottomContainer>
                    </div>
                </div>
            </AboutContainer>
        </AboutWrapper>
    )
}

export default About;