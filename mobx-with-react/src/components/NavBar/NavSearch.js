import React from "react";
import styled from "styled-components";

const NavSearch = () => {
  const searchBtn = () => {
    alert("검색 버튼 눌렀어!");
  };

  return (
    <NavSearchLayout>
        <NavSearchInput>
          <InputBox></InputBox>
          <NavSearchBtn onClick={searchBtn}></NavSearchBtn>
        </NavSearchInput>
    </NavSearchLayout>
  );
  // return (
  //   <NavSearchLayout>
  //     <form style={{display:""}}>
  //       <NavSearchInput>
  //         <InputBox></InputBox>
  //         <NavSearchBtn onClick={searchBtn}></NavSearchBtn>
  //       </NavSearchInput>
  //     </form>
  //   </NavSearchLayout>
  // );
};

const NavSearchLayout = styled.div`
padding-left: 1.75rem;
    padding-right: 1.75rem;
  /* margin-bottom: .5rem; */
  /* will be layout css cod
  e  */
`;
const NavSearchInput = styled.div`
    -webkit-transition: all .125s ease-in;
    -o-transition: .125s all ease-in;
    transition: all .125s ease-in;
    border-radius: 4px;
    display: -ms-flexbox;
    display: flex;
    padding-left: .5rem;
    background: #f1f3f5;
    border: 1px solid #dee2e6;
    -ms-flex-align: center;
    align-items: center;
    color: #343a40;
`;
const InputBox = styled.input`
    font-family: inherit;
  /* margin-left: 20px;
  height: 30px;
  width: 70%; */
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
