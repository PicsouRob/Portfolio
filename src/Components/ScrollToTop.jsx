import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import water from '../assets/water.png';

const ScrollToTopView = styled.div`
    position: fixed;
    bottom: 10px;
    right: 0px;
    cursor: pointer;
`;

function ScrollToTop() {
    return (
        <ScrollToTopView>
            <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClassName="selected"
            >
                <img width={80} height={80} src={water} alt="water" />
            </Link>
        </ScrollToTopView>
    )
}

export default ScrollToTop;

