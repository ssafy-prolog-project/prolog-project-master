import React, {Component} from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import agent from "../../agent";

@inject("postStore")
@observer
class SideWrapper extends Component{
    state = {
        tags: [] 
    };

    componentDidMount() {
        const userid=this.props.userid
        const { postStore } = this.props;
        agent.Tags.getTags(userid).then(
          (res) => {
            console.log(res.data.data)
            this.setState({
              tags: res.data
            });
          }
        )  
    }

    render(){
        return(
            <SideWrapperLayout>
            {this.state.tags.map((item, index) => (
              <p>{item}</p>
              ))}
            </SideWrapperLayout>
        
        )
    }
}


const SideWrapperLayout = styled.div`
    flex-shrink: 0;
    background-color: red;
   
    @media (max-width: 768px) {
        display: none
    }
`

export default SideWrapper;