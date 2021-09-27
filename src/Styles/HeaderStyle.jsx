import styled from 'styled-components';
import { Link } from "react-scroll";

export const HeaderWrapper = styled.nav`
    position: ${(props) => props.isFixed ? "fixed" : "relative"};
    width: 100%;
    height: 90px;
    background: #fccf58;
    box-shadow: 0 -11px 40px  ${(props) => props.isFixed ? "#000" : "#fccf58"};
    z-index: 1;
    transition: position .3s;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    &.nav-container .active {
        border-bottom: 2px solid #170f45;
        color: #170f45;
    }
`;

export const ColumnMenu = styled.div`
    width: 100%;
    margin: 0 20px;
    background: rgb(36, 26, 56, 0.9);
    display: flex;
    flex-direction: column;
    transition: all 1s ease-in-out;
    ${(props) => props.$isShow === true &&`
        background: red;
    `}
`;

export const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: #242323;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: #170f45;
        border-bottom: 2px solid #170f45;
    }
    ${(props) =>
        props.$isFullLink &&`
        font-size: 50px;
        color: #fff;
        border-bottom: none;
        &:hover {
            border-bottom: none;
        }
    `}
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
    border-top: 1px solid #fff;
    color: #fff;
    &:hover {
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;
        color: #fff;
    }
`;