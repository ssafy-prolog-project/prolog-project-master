import React from "react";
import styled from "styled-components";

const NavSearch = () => {
  const searchBtn = () => {
    alert("검색 버튼 눌렀어!");
  };

  return (
    <NavSearchLayout>
      <form style={{display:""}}>
        <NavSearchInput>
            <input id="searchText"/>
        </NavSearchInput>
        <NavSearchBtn onClick={searchBtn}></NavSearchBtn>
      </form>
    </NavSearchLayout>
  );
};

const NavSearchLayout = styled.div`
  /* will be layout css code  */
`;
const NavSearchInput = styled.div`
  width: 80%;
  height: 35px;
`;
const NavSearchBtn = styled.input.attrs({
  type: "submit",
  value: "검색"
})`
  background: #00aec9;
  color: white;
  cursor: pointer;
  margin-bottom: 0;
  width: 20%;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  text-align: center;
`;

export default NavSearch;
