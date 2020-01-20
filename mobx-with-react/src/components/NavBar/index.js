import React from 'react';
import NavSearch from './NavSearch';
import NavItems from './NavItems';
import styled from 'styled-components';

const NavBar = () => {
    const BannerClick = () => {
        alert("배너를 눌렀어요!");
      };
    
    return (
        <NavBarLayout>
            <NavLogo onClick={BannerClick}>Prolog;</NavLogo> {/* 로고 들어갈 자리 */}
            <NavSearch></NavSearch>
            <NavItems></NavItems>
        </NavBarLayout>
    );
};

const NavBarLayout = styled.div`
    background-color : gray;
    color: white;
    /* will be layout css code  */
`;

const NavLogo = styled.div`
    margin-left: .5rem;
    margin-bottom: .5rem;
    font-size: 50px;
    padding-top: .5rem;
    padding-bottom: .5rem;
    /* font-family: ;  */
`;

export default NavBar;
