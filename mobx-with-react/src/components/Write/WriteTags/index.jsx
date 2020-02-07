import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WriteTags = () => {
    // const [color, setColor] = useState("#1a3365");
    // const YellowClick = () => {
    //     setColor("#ac7339");
    // }
 
  return ( 
    <WriteTagLayout>
      <input placeHolder="tags"></input>
    </WriteTagLayout>
  );
};

const HeaderInput = styled.input`
  font-family: Inconsolata;
  font-size: 34pt;
  border-color: transparent;
  background: inherit;
  color: white;
  /* background: ${props=>props.color}; */
  :focus{
      outline: none;
  }
`;

const WriteTagLayout = styled.div`
  background-color: #1a3365; 
  /* align-items: "center"; */
`;

export default WriteTags;
