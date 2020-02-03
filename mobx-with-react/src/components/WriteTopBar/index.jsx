import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowBack } from "styled-icons/boxicons-regular/ArrowBack";
import { Image2 } from "styled-icons/remix-line/Image2";
import { ColorFill } from "styled-icons/boxicons-solid/ColorFill";


export const ImageIcon = styled(Image2)`
  cursor: pointer;
  width: 40px;
`;

export const ColorFillIcon = styled(ColorFill)`
  cursor: pointer;
  width: 40px;
`;
export const ArrowBackIcon = styled(ArrowBack)`
  cursor: pointer;
  margin-top: 1%;
  margin-left: 1%;
  margin-bottom: auto;
  color: black;
  height: 50px;
`;

const WriteTopBar = ({palette, color}) => {
  
  const SaveonClick = () => {
    alert("저장되었습니다.");
  };

  const ColorClick = () => {
    alert("팔레트 열기!");
  };
 
  return (
    <WriteTopBarLayout style={{backgroundColor:{color}}}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <ArrowBackIcon></ArrowBackIcon>
      </Link>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <SaveBtn onClick={SaveonClick}>저장</SaveBtn>
      </Link>
      <PluginSpace>
        <Icons>
          <ImageIcon></ImageIcon>
        </Icons>
        <Icons>
          <ColorFillIcon onClick={ColorClick}></ColorFillIcon>
        </Icons>
      </PluginSpace>
      <HeaderDiv>
        <HeaderInput placeholder="제목을 입력하세요"></HeaderInput>
      </HeaderDiv>
      
    </WriteTopBarLayout>
  );
};
const PluginSpace = styled.div`
  float: right;
  width: 4rem;
  height: 10rem;
  background-color: white;
  margin-top: 6rem;
`;
const Icons = styled.div`
  width: 40px;
  float: right;
  margin-top: 2rem;
  :hover {
    opacity: 50%;
  }
`;

const HeaderDiv = styled.div`
  text-align: left;
  transform: translate(50%, -50px);
  -webkit-transform: translate(50%, -50px);
  position: absolute;
  z-index: 11;
  width: 700px;
  height: 100px;
  right: 50%;
  margin-top: 15rem;
`;

const HeaderInput = styled.input`
  font-family: Inconsolata;
  font-size: 34pt;
  border-color: transparent;
`;

const WriteTopBarLayout = styled.div`
  height: 28rem;
  /* background-color: #1a3365; */
  border-bottom-style: solid;
  border-color: gray;
  border-width: 1px;

`;

const SaveBtn = styled.div`
  border-radius: 5px;
  border-color: black;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  height: 30px;
  width: 60px;
  background-color: white;
  float: right;
  margin-top: 1%;
  margin-right: 1%;
  text-align: center;
  padding-top: 3px;
`;

export default WriteTopBar;
