import React from 'react';
import NavSearch from './NavSearch';
import NavItems from './NavItems';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <NavBarLayout >
            <Link to={"/"} style={{textDecoration:"none"}}>
                <NavLogo>
                    Prolog;
                </NavLogo> {/* 로고 들어갈 자리 */}
            </Link>
            <NavSearch></NavSearch>
            <NavItems></NavItems>
        </NavBarLayout>
    );
};

const NavBarLayout = styled.div`
    background-color : gray
`;

const NavLogo = styled.div`
    padding: 0 2rem;
    margin-top: 1.75rem;
    margin-bottom: 1.75rem;
    font-size: 2rem;
    line-height: 2rem;
    font-family: Inconsolata;
    color: white;
    display: block;
    position: relative;
    cursor: pointer;
 
`;

export default NavBar;
