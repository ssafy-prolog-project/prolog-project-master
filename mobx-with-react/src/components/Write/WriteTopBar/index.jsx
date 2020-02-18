import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SketchPicker } from "react-color";

import { ArrowBackIcon, PrimitiveDotIcon } from "../../../styles/iconStyle.js";

const blackColor = "#a6a6a6";
const redColor = "#ff9999";
const greenColor = "#66cc99";
const blueColor = "#9494d1";
const yellowColor = "#ac7339";
const color10 = "#555555";
const color9 = "#A97857";
const color8 = "#536B82";

const WriteTopBar = ({
  title,
  coverColor,
  changeTitle,
  changeCoverColor,
  postCode
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
  const color8Click = () => onCircleClick(color8);
  const color9Click = () => onCircleClick(color9);
  const color10Click = () => onCircleClick(color10);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = color => {
    setColor(color.hex);
  };

  const popover = {
    position: "relative",
    marginRight: "200px"
    //zIndex: '10',
    // :hover {
    //   opacity: 0%;
    // }
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px"
  };

  return (
    <WriteTopBarLayout color={color}>
      {/* TODO 뒤로가기가 되어야함. 메인으로 가는게 아니라 */}
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <ArrowBackIcon></ArrowBackIcon>
      </Link>

      <HeaderDiv>
        {postCode === undefined ? (
          <HeaderInput
            placeholder="제목을 입력하세요"
            color={color}
            value={title}
            onChange={changeTitle}
          />
        ) : (
          <HeaderInput
            placeholder="제목을 받아와야하는데..."
            color={color}
            value={title}
            onChange={changeTitle}
          />
        )}
      </HeaderDiv>
      <ColorDots>
        <ColorDiv>
          <PrimitiveDotIcon color={"white"} onClick={handleClick} />
          {displayColorPicker ? (
            <div style={popover}>
              <div style={cover} onClick={handleClose} />
              <SketchPicker color={color} onChange={handleChange} />
            </div>
          ) : null}
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon color={"#a6a6a6"} onClick={BlackClick} />
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon color={"#ff9999"} onClick={RedClick} />
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon color={"#66cc99"} onClick={GreenClick} />
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon color={"#9494d1"} onClick={BlueClick} />
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon color={"#ac7339"} onClick={YellowClick} />
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon color={"#536B82"} onClick={color8Click} />
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon color={"#A97857"} onClick={color9Click} />
        </ColorDiv>
        <ColorDiv>
          <PrimitiveDotIcon color={"#555555"} onClick={color10Click} />
        </ColorDiv>
      </ColorDots>
    </WriteTopBarLayout>
  );
};

const ColorDiv = styled.div`
  width: 2rem;
  float: left;
  text-align: center;
`;

const ColorDots = styled.div`
  width: 18rem;
  height: 2rem;
  margin-top: 12rem;
  position: absolute;
  margin-left: 33%;
`;

const HeaderDiv = styled.div`
  text-align: center;
  transform: translate(50%, -50px);
  -webkit-transform: translate(50%, -50px);
  position: absolute;
  z-index: 11;
  width: 100%;
  height: 100px;
  right: 50%;
  margin-top: 8rem;
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
  height: 20rem;
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

export default WriteTopBar;
