import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import Loader from "react-loader-spinner";

@inject("postStore")
@observer
class PostList extends Component {
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

  // //젤 처음에 보여줄 곳을 axios로 우리 back에서 호출하자.
  // fetch("https://jsonplaceholder.typicode.com/photos/100")
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json.id)
  //     console.log(json.title)
  //   }
  //   )
  // }

  //추가로 데이터를 호출한다. axios로. 이걸 여기서 할지 store에서 할 지는 고민을 좀 해보자.
  fetchMoreData = () => {
    if (this.state.items.length >= this.props.postStore.length) {
      this.setState({ hasMoreItems: false });
      return;
    }

    setTimeout(() => {
      this.props.postStore.getItems(this.state.items.length, 6);
      this.setState({
        items: this.state.items.concat(this.props.postStore.returnItems)
      });
    }, 500);
  };

  render() {
    const { items, hasMoreItems } = this.state;

    return (
      <InfiniteScroll
        dataLength={items.length}
        next={this.fetchMoreData}
        hasMore={hasMoreItems}
        loader={
          <div style={{ textAlign: "center"}}>
            <Loader
              type="ThreeDots"
              color="#1A3365"
              height={100}
              width={100}
              timeout={1500} //3 secs
            />
          </div>
        }
        endMessage={<h4>End</h4>}
      >
        <GridDiv>
          {items.map((item, index) => (
            <PostCard key={index} post={item} />
          ))}
        </GridDiv>
      </InfiniteScroll>
    );
  }
}

export default PostList;

const GridDiv = styled.div`
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
