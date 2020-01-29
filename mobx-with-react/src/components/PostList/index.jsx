import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

@inject("post")
@observer
class PostList extends Component {
  state = {
    items: [],
    hasMoreItems: true
  };

  componentDidMount() {
    const { post } = this.props;
    post.getItems(0,6);
    this.setState({
      items: post.returnItems
    });
  }

  render() {
    const { items, hasMoreItems } = this.state;
    const { post } = this.props;
    console.log(items.length);
    console.log(hasMoreItems);
    const fetchMoreData = () => {
      console.log("next");
      if (this.state.items.length >= post.postItems.length) {
        this.setState({ hasMoreItems: false });
        return;
      }
      console.log("call fetchmoredata");
      setTimeout(() => {
        post.getItems(items.length, 6);
        this.setState({ items: this.state.items.concat(post.returnItems) });
      }, 500);
    };

    return (

        <InfiniteScroll
          height = "800px"
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMoreItems}
          loader={<h4>Loading...</h4>}
          //scrollableTarget="scrollableDiv"
          endMessage={<h4>End</h4>}
        >
          <Divs id="scrollableDiv">
          {items.map((item, index) => (
            <PostCard key={index} post={item} />
          ))}
          </Divs>
        </InfiniteScroll>

    );
  }
}


export default PostList;

const Divs = styled.div`
  padding: 2%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 33%);
  grid-template-rows: repeat(auto-fit, 1fr);

  @media (max-width: 1024px) {
    /*태블릿?*/
    grid-template-columns: repeat(auto-fit, 50%);
    grid-template-rows: repeat(auto-fit, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;

    grid-template-rows: repeat(auto-fit, 1fr);
  }
`;
