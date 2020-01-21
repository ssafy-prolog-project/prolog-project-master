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
            <NavLogo onClick={BannerClick}>
                Prolog;
            </NavLogo> {/* 로고 들어갈 자리 */}
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
    /* margin-left: .5rem;
    margin-bottom: 50px;
    margin-top: 10px;
    font-size: 50px;
    padding-top: .5rem;
    padding-bottom: .5rem; */
    /* font-family: ;  */
`;

export default NavBar;
