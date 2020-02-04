import React, {Component} from "react";
import styled from "styled-components";

class TabWrapper extends Component{
    render(){
        return(
            <TabWrapperLayout></TabWrapperLayout>
        )
    }
}

const TabWrapperLayout = styled.div`
    margin-left: 5rem;
`

export default TabWrapper;