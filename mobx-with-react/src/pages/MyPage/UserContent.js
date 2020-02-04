import React, {Component} from 'react';
import styled from "styled-components";
import Content from "./Content";
import Tabs from "./Tabs";

class UserContent extends Component{
    render(){
        return(
            <UserContentLayout>
                <Tabs></Tabs>
                <Content></Content>
            </UserContentLayout>
        )
    }
}

const UserContentLayout = styled.div`
    margin-top: 5%;
    display: grid;
    grid-template-rows: 80px;
`

export default UserContent;