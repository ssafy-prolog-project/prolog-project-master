import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowBack } from "styled-icons/boxicons-regular/ArrowBack";
import { Image2 } from "styled-icons/remix-line/Image2";
import { ColorFill } from "styled-icons/boxicons-solid/ColorFill";
import { PrimitiveDot } from "styled-icons/octicons/PrimitiveDot";

export const PrimitiveDotIcon = styled(PrimitiveDot)`
    cursor: pointer;
    width: 15px;
    
`;

export const ImageIcon = styled(Image2)`
  cursor: pointer;
  width: 40px;
  color: white;
`;

export const ColorFillIcon = styled(ColorFill)`
  cursor: pointer;
  width: 40px;
  color: white;
`;
export const ArrowBackIcon = styled(ArrowBack)`
  cursor: pointer;
  margin-top: 2rem;
  margin-left: 2rem;
  color: white;
  width: 50px;
`;

const WriteTopBar = () => {
    const [color, setColor] = useState("#1a3365");
    const BlackClick = () => {
        setColor("#a6a6a6");
    }

    const RedClick = () => {
        setColor("#ff9999");
    }

    const GreenClick = () => {
        setColor("#66cc99");
    }

    const BlueClick = () => {
        setColor("#9494d1");
    }

    const YellowClick = () => {
        setColor("#ac7339");
    }

  const SaveonClick = () => {
    alert("저장되었습니다.");
  };

  const ColorClick = () => {
    alert("팔레트 열기!");
  };
 
  return ( 
    <WriteTopBarLayout color={color}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <ArrowBackIcon></ArrowBackIcon>
      </Link>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <SaveBtn onClick={SaveonClick}>저장</SaveBtn>
      </Link>
      <PluginSpace color={color}>
        <Icons>
          <ImageIcon></ImageIcon>
        </Icons>
        <Icons>
          <ColorFillIcon onClick={ColorClick}></ColorFillIcon>
        </Icons>
      </PluginSpace>
      <HeaderDiv>
        <HeaderInput placeholder="제목을 입력하세요" color={color}></HeaderInput>
      </HeaderDiv>
      <Palette>
          <ColorDiv>
          <PrimitiveDotIcon style={{color: "#a6a6a6"}} onClick={BlackClick}></PrimitiveDotIcon>
          </ColorDiv>
          <ColorDiv>
          <PrimitiveDotIcon style={{color: "#ff9999"}} onClick={RedClick}></PrimitiveDotIcon>
          </ColorDiv>
          <ColorDiv>
          <PrimitiveDotIcon style={{color: "#66cc99"}} onClick={GreenClick}></PrimitiveDotIcon>
          </ColorDiv>
          <ColorDiv>
          <PrimitiveDotIcon style={{color: "#9494d1"}} onClick={BlueClick}></PrimitiveDotIcon>
          </ColorDiv>
          <ColorDiv>
          <PrimitiveDotIcon style={{color: "#ac7339"}} onClick={YellowClick}></PrimitiveDotIcon>
          </ColorDiv>
      </Palette>
    </WriteTopBarLayout>
  );
};

const ColorDiv = styled.div`
    width:2rem;
    float: left;
    text-align: center;
`;
const Palette = styled.div`
    width:10rem;
    height: 2rem;
    margin-top: 20rem;
    position: absolute;
    margin-left: 45%;
`;

const PluginSpace = styled.div`
  float: right;
  width: 4rem;
  height: 10rem;
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
  background: inherit;
  color: white;
  /* background: ${props=>props.color}; */
`;

const WriteTopBarLayout = styled.div`
  height: 28rem;
 /* background-color: #1a3365;  */
  border-bottom-style: solid;
  border-color: gray;
  border-width: 1px;
  position: relative;
  background: ${props=>props.color};
  -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
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
