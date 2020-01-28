import React from "react";
import styled from "styled-components";
import {Search} from "styled-icons/evil/Search";

export const SearchIcon = styled(Search)`
  width: 1em;
  height: 1em;
  cursor: pointer;
`;

const NavSearch = () => {
  const searchBtn = () => {
    alert("검색 버튼 눌렀어!");
  };

  return (
    <NavSearchLayout>
      <NavSearchInput>
        <SearchIcon onClick={searchBtn}></SearchIcon>
        <InputBox></InputBox>
      </NavSearchInput>
    </NavSearchLayout>
  );
};

const NavSearchLayout = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;
const NavSearchInput = styled.div`
  -webkit-transition: all .125s ease-in;
    -o-transition: .125s all ease-in;
    transition: all .125s ease-in;
    border-radius: 4px;
    display: -ms-flexbox;
    display: flex;
    padding-left: .5rem;
    background: white;
    border: 1px solid white;
    -ms-flex-align: center;
    align-items: center;
    color: #343a40;
    margin: 0 auto;
    width: 80%;
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

// const NavSearchBtn = styled.input.attrs({

//   value: "검색" /*search.png 넣고싶음...*/
// })`
//   background: #00aec9;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 0;
//   width: 20%;
//   height: 35px;
//   border-color: transparent;
//   box-shadow: 0px;
//   text-align: center;
//   font-size: 100%;
// `;

export default NavSearch;
