import React, { useState }from 'react';
import { useWidth } from '../Styles/GlobalStyleWrapper';
import { HeaderWrapper, StyledLink, HeaderContainer, ColumnMenu, NavLink } from '../Styles/HeaderStyle';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContent = styled.div`
    display: ${(props) => props.width > 768 ? "flex" : "none"};
    margin-right: 100px;
`;

function Header() {
    const [showScroll, setShowScroll] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const { width } =  useWidth();

    const checkScrollTop = () => {    
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true);  
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false);
        }  
    };

    const toggleIcon = () => {
        setIsShow(!isShow);
    }

    window.addEventListener('scroll', checkScrollTop);

    return (
        <HeaderWrapper isFixed={showScroll}>
            <HeaderContainer className="nav-container">
                <StyledLink $isFullLink
                    activeClass="inactive"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >U|X</StyledLink>
                <HeaderContent width={width}>
                    <StyledLink to="home"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClassName="selected"
                    >Home</StyledLink>
                    <StyledLink activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClassName="selected"
                    >About</StyledLink>
                    <StyledLink 
                        activeClass="active"
                        to="blog"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClassName="selected"
                    >Blog</StyledLink>
                    <StyledLink
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClassName="selected"
                    >Skills</StyledLink>
                    <StyledLink 
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClassName="selected"
                    >Projects</StyledLink>
                    <StyledLink
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClassName="selected"
                    >Contact</StyledLink>
                </HeaderContent>
                {width <= 768 && (
                    <div onClick={() => toggleIcon()}>
                        {!isShow ? (
                            <FaBars color="#fff" 
                                size={25} style={{ cursor: "pointer" }}
                            />
                        ) : (
                            <FaTimes color="#fff" 
                                size={25} style={{ cursor: "pointer" }}
                            />
                        )}
                    </div>
                )}
            </HeaderContainer>
            {isShow & width < 768  && (
                <div style={{ display: "flex" }}>
                    <ColumnMenu isShow={isShow}>
                        <NavLink
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Home</NavLink>
                        <NavLink 
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</NavLink>
                        <NavLink 
                            activeClass="active"
                            to="blog"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Blog</NavLink>
                        <NavLink 
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Skills</NavLink>
                        <NavLink 
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Projects</NavLink>
                        <NavLink 
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contact</NavLink>
                    </ColumnMenu>
                </div>
            )}
        </HeaderWrapper>
    )
}

export default Header;