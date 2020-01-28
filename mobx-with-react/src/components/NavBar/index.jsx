import React from 'react';
import NavSearch from './NavSearch';
import NavItems from './NavItems';
import Logo from './Logo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <NavBarLayout >
            <Logo></Logo>
            <NavSearch></NavSearch>
            <NavItems></NavItems>
        </NavBarLayout>
    );
};

const NavBarLayout = styled.div`
    background-color : #1a3365;

    @media (max-width: 768px) {
        display: none;
  }
`;

// const NavLogo = styled.div`
//     padding: 0 2rem;
//     margin-top: 1.75rem;
//     margin-bottom: 1.75rem;
//     font-size: 2rem;
//     line-height: 2rem;
//     font-family: Inconsolata;
//     color: white;
//     display: block;
//     position: relative;
//     cursor: pointer;
 
// `;

export default NavBar;
