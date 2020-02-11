import React,{Component} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react"

@inject("userStore", "authStore")
@observer
// 누르면 버튼으로 할 수 있는 동작 구현
class UserButton extends Component{
    render(){
        const {values} = this.props.authStore;
        const{accessToken,provider, id, name, profileimg} = values;

        return (   
            <LINKS to={"/mypage"} style={{ textDecoration: "none" }}>
                <Sample src={profileimg}></Sample>
            </LINKS>
        )
    }
}

export const LINKS = styled(Link)`
    grid-area: test;
    display: inline-block;
    padding-top: 1rem;
    padding-left: 70%;
    
    @media (max-width: 768px) {
        padding-left: 0;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding-left: 60%;
    }
`

const Sample = styled.img`
    /* grid-area: test; */
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    font-family: Inconsolata;
`;

export default UserButton;