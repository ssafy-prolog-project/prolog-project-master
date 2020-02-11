import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";

import ProjectList from './ProjectList';
import {Edit} from 'styled-icons/boxicons-regular/Edit';

export const EditP = styled(Edit)`
    color: #DCDCDC;
    width: 1rem;
    height: 1rem;
    margin-bottom: 2.4rem;
`


@inject("postStore")
@observer
class Project extends Component {
    state = {
        items: [],
        hasMoreItems: true
    };

    componentDidMount() {
        const { postStore } = this.props;
        postStore.getItems(0, 6);
        this.setState({
          items: postStore.returnItems
        });
      }

    render(){
        const { items, hasMoreItems } = this.state;
        return(
            <InfiniteLayout 
              dataLength={items.length}
              next={this.fetchMoreData}
              hasMore={hasMoreItems}
              loader={
                <div style={{ textAlign: "center" }}>
                  <Loader
                    type="ThreeDots"
                    color="#1A3365"
                    height={100}
                    width={100}
                    timeout={1500} //3 secs
                  />
                </div>
              }
              endMessage={<h4></h4>}
            >
            
            <ProTitle>Project<EditP/></ProTitle>
            <ProjectLayout>
            {items.map((item, index) => (
                <ProjectList key={index} post={item} />
              ))}
            </ProjectLayout>
        </InfiniteLayout>
        )
    }  
};

export const InfiniteLayout = styled(InfiniteScroll)`
  /* background-color: #e3e3e3; */
`

const ProjectLayout = styled.div`
    padding: 5%;
    width: auto;
    margin-left: 5rem;
    grid-template-columns: 100%;
    grid-template-rows: repeat(auto-fit, 1fr);

    @media (max-width: 768px){
        margin-left: 0;
        margin-right:0;
        width: 100%;
    }
`;

const ProTitle = styled.div`
  text-align: center;
  font-size: 2.4rem;
`

export default Project;