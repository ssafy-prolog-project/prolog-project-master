import React from 'react';
import styled from "styled-components";
import NavSearch from '../../components/NavBar/NavSearch';
import { Link } from 'react-router-dom';

const SearchPage = () => {
    return (
        <div>
           <Link to={"/"} style={{ textDecoration: "none" }}>
        <Logo>Prolog;</Logo>
      </Link>
           <NavSearch></NavSearch>

        </div>
    );
};

const Logo = styled.div`
  height: 7rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
  font-size: 2rem;
  font-family: Inconsolata;
  color: black;
`;


export default SearchPage;