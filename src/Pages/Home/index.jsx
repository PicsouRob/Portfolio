import React from 'react';
import picsou from '../../assets/picsou.png';
import { Link } from "react-scroll";
import { useWidth } from '../../Styles/GlobalStyleWrapper';
import { HomeWrapper, HomeContainer, TextStyle,
     ButtonStyle, InfoStyle, DescriptorStyle, SocialIconContent
     } from './HomeStyle.jsx';
import { SocialIcon } from 'react-social-icons';

function Home() {
    const { width } =  useWidth();
    return (
        <HomeWrapper width={width} id="home">
            <HomeContainer>
                <TextStyle>
                    <DescriptorStyle width={width}>I AM PICSOU A. CHIESA <br /> 
                        & I AM A UI/UX DESIGNER
                    </DescriptorStyle>
                    <InfoStyle>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</InfoStyle>
                    <Link
                        to="contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClassName="selected"
                    ><ButtonStyle>Hire Me</ButtonStyle>
                    </Link>
                    {width <= 990 && (
                        <SocialIconContent>
                            <SocialIcon bgColor="transparent" fgColor="#302f2f" url="https://twitter.com/jaketrent" />
                            <SocialIcon bgColor="transparent" fgColor="#302f2f" url="https://facebook.com/jaketrent" />
                            <SocialIcon bgColor="transparent" fgColor="#302f2f"url="https://instagram.com/jaketrent" />
                            <SocialIcon bgColor="transparent" fgColor="#302f2f" url="https://linkedin.com/jaketrent" />
                        </SocialIconContent>
                    )}
                </TextStyle>
                {width > 990 && (
                    <img src={picsou} style={{width: width > 1140 ? "800px" : "400px"}} alt="picsou" />
                )}
            </HomeContainer>
        </HomeWrapper>
    )
}

export default Home;