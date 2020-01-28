import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {Search} from "styled-icons/evil/Search";

export const SearchIcon = styled(Search)`
  width: 3em;
  height: 3em;
  cursor: pointer;
`;
const SearchPage = () => {
    return (
        <div>
           <Link to={"/"} style={{ textDecoration: "none" }}>
        <Logo>Prolog;</Logo>
      </Link>
           <SearchBox>
               <SearchIcon></SearchIcon>
               <InputBox></InputBox>
           </SearchBox>

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

const SearchBox = styled.div`
    border-radius: 30px;
    border: 1px solid #1a3365;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    color: #1a3365;
    padding-left: 1rem;
    padding-right: .5rem;
    -ms-flex-negative: none;
    flex-shrink: none;
    width: 80%;
    margin: 0 auto;
`;

const InputBox = styled.input`
    background: none;
    border: none;
    outline: none;
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-size: .875rem;
    -ms-flex: 1 1;
    flex: 1 1;
    margin-left: .5rem;
    color: inherit;
   
`;

export default SearchPage;