import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HuePicker } from 'react-color'

import {
  ImageIcon,
  ArrowBackIcon,
  ColorFillIcon,
  PrimitiveDotIcon
} from "../../../styles/iconStyle.js";

const blackColor = "#a6a6a6";
const redColor = "#ff9999";
const greenColor = "#66cc99";
const blueColor = "#9494d1";
const yellowColor = "#ac7339";

const WriteTopBar = ({
  title,
  coverColor,
  coverImage,
  changeTitle,
  changeCoverColor,
  changeCoverImage,
  save
}) => {
  const [color, setColor] = useState(coverColor);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const onCircleClick = color => {
    setColor(color);
    changeCoverColor(color);
  };

  //왜 직접 <PrimitiveDotIcon style={{color: "#a6a6a6"}} onClick={onCircleClick(blackColor)}></PrimitiveDotIcon>
  //같은 식으로 짜면 무한대 리렌더가 발생하는걸까?
  const BlackClick = () => onCircleClick(blackColor);
  const RedClick = () => onCircleClick(redColor);
  const GreenClick = () => onCircleClick(greenColor);
  const BlueClick = () => onCircleClick(blueColor);
  const YellowClick = () => onCircleClick(yellowColor);

  const ColorClick = () => {
    alert("팔레트 열기!");
  };

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  };

  const handleClose = () => {
    setDisplayColorPicker(false)
  };

  const handleChange = (color) => {
    setColor(color.hex)
  };

  const popover = {
    position: 'relative',
    marginRight: "200px"
    //zIndex: '10',
    // :hover {
    //   opacity: 0%;
    // }
  }
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  }

  return (
    <WriteTopBarLayout color={color}>
      {/* TODO 뒤로가기가 되어야함. 메인으로 가는게 아니라 */}
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <ArrowBackIcon></ArrowBackIcon>
      </Link>
      <SaveBtn onClick={save}>저장</SaveBtn>
      <PluginSpace>
        <Icons>
          <ImageIcon color="white"></ImageIcon>
        </Icons>
        <Icons>
          <ColorFillIcon onClick={handleClick}></ColorFillIcon>
          { displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ handleClose }/>
          <HuePicker color={ color } onChange={handleChange} />
        </div> : null }

        </Icons>
        
      </PluginSpace>
      <HeaderDiv>
        <HeaderInput
          placeholder="제목을 입력하세요"
          color={color}
          value={title}
          onChange={changeTitle}
        ></HeaderInput>
      </HeaderDiv>
      <Palette>
        <ColorDiv>
          <PrimitiveDotIcon
            style={{ color: "#a6a6a6" }}
            onClick={BlackClick}
          ></PrimitiveDotIcon>
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon
            style={{ color: "#ff9999" }}
            onClick={RedClick}
          ></PrimitiveDotIcon>
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon
            style={{ color: "#66cc99" }}
            onClick={GreenClick}
          ></PrimitiveDotIcon>
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon
            style={{ color: "#9494d1" }}
            onClick={BlueClick}
          ></PrimitiveDotIcon>
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon
            style={{ color: "#ac7339" }}
            onClick={YellowClick}
          ></PrimitiveDotIcon>
        </ColorDiv>
      </Palette>
    </WriteTopBarLayout>
  );
};

const ColorDiv = styled.div`
  width: 2rem;
  float: left;
  text-align: center;
`;
const Palette = styled.div`
  width: 10rem;
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
  /* :hover {
    opacity: 50%;
  } */
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
  /* background: ${props => props.color}; */
  :focus{
      outline: none;
  }
`;

const WriteTopBarLayout = styled.div`
  height: 28rem;
  /* border-bottom-style: solid;
  border-color: gray;
  border-width: 1px; */
  position: relative;
  background-color: ${props => props.color};
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
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
