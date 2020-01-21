import React from "react";
import { SearchAlt2 } from "styled-icons/boxicons-regular/SearchAlt2";
import styled from "styled-components";

export const SearchIcon = styled(SearchAlt2)`
  width: 20%;
  height: 35px;
  cursor: pointer;
`;

const NavSearch = () => {
  const searchBtn = () => {
    alert("검색 버튼 눌렀어!");
  };

  return (
    <NavSearchLayout>
      <NavSearchInput>
        <InputBox></InputBox>
        <SearchIcon onClick={searchBtn} />
        {/* <NavSearchBtn ></NavSearchBtn> */}
      </NavSearchInput>
    </NavSearchLayout>
  );
};

const NavSearchLayout = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-top: 2rem;
`;
const NavSearchInput = styled.div`
  -webkit-transition: all 0.125s ease-in;
  -o-transition: 0.125s all ease-in;
  transition: all 0.125s ease-in;
  border-radius: 4px;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0.5rem;
  background: #f1f3f5;
  border: 1px solid #dee2e6;
  -ms-flex-align: center;
  align-items: center;
  color: #343a40;
`;
const InputBox = styled.input`
  font-family: inherit;
  width: 80%;
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
