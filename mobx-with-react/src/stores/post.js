import { observable, action, computed } from "mobx";

import { getUnixTime } from 'date-fns'


// imageUrl, Title, category, text, likes, comments, created_at, updated_at , author
export default class PostStore {
  @observable nextId = 7;
  @observable postItems = [
    {
      id: 0,
      imgUrl:
        "http://file2.instiz.net/data/file/20141221/2/0/2/2027c83dca8a9b5658498d9e641153b1.jpg",
      title: "test1",
      category: "post",
      text: "test 중..",
      author: "JEJ",
      date: getUnixTime(new Date(2019, 2, 2)),
      views: 5555
    },
    {
      id: 1,
      imgUrl: "",
      title: "test2",
      category: "post",
      text: "test 중입니다.",
      author: "CKY",
      date: getUnixTime(new Date(2018, 2, 2)),
      views: 305
    },
    {
      id: 2,
      imgUrl: "",
      title: "test3",
      category: "post",
      text: "test 중입니다.",
      author: "RRRY",
      date: getUnixTime(new Date(2018, 4, 2)),
      views: 999
    },
    {
      id: 3,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpw1rVXmdKGZf0_yS-e5PwKbYRLo8f1MZUiO-acYrpvoLW958LKA&s",
      title: "test4",
      category: "post",
      text: "test 중입니다.",
      author: "한글",
      date: getUnixTime(new Date(2020, 2, 5)),
      views: 10
    },
    {
      id: 4,
      imgUrl:
        "https://i.pinimg.com/originals/72/75/38/727538673ef8a884113e5c134e9bf228.jpg",
      title: "test5",
      category: "post",
      text: "test 중입니다.",
      author: "마바사",
      date: getUnixTime(new Date(2020, 9, 12)),
      views: 2305
    },
    {
      id: 5,
      imgUrl:
        "http://img1.photons.co.kr/site12/201904/l/5cb678acc2e7820190417095156798307.jpg",
      title: "test6",
      category: "post",
      text: "test 중입니다.",
      author: "영어",
      date: getUnixTime(new Date(2016, 2, 5)),
      views: 999999
    },
    {
      id: 6,
      imgUrl:
        "https://mb.ntdtv.kr/assets/uploads/2018/07/51186da4320abb1602e1b89ee881abd3-795x436.jpg",
      title: "test7",
      category: "post",
      text: `우리는 리액트를 처음부터 직접 만들어 볼 것입니다. 최적화나 필수적이지 않은 기능들은 제외하고, 실제 리액트 코드 구조를 기반으로 한 단계씩 따라가 봅시다.

      이전에 올린 "build your own React" 포스트들과는 달리 이번 포스트에서는 리액트 16.8 버전을 기반으로 하고 있습니다. 이제 훅을 사용할 수 있으며, 클래스와 관련된 코드를 제거할 수 있습니다.
      
      이전의 오래된 블로그 포스트와 코드의 히스토리는 Didact repo에서 확인할 수 있습니다. 또, 동일한 내용을 다루는 콘텐츠도 있지만, 이는 그와 독립적인 포스트입니다.
      
      우리가 새롭게 만들 버전의 리액트에 들어갈 내용들을 하나씩 소개합니다:
      
      Step I: createElement 함수
      Step II: render 함수
      Step III: 동시성 모드(Concurrent Mode)
      Step IV: Fibers
      Step V: 렌더와 커밋 단계 (Render and Commit Phases)
      Step VI: 재조정(Reconciliation)
      Step VII: 함수형 컴포넌트(Function Components)
      Step VIII: 훅(Hooks)
      Step Zero: Review
      먼저 기본 개념을 복습해 보겠습니다. React, JSX, DOM 엘리먼트가 동작하는 방식을 이미 잘 알고 있다면 이 단계는 건너 뛰어도 됩니다.
      
      const element = <h1 title="foo">Hello</h1>
      const container = document.getElementById("root")
      ReactDOM.render(element, container)
      이 3줄 짜리 코드로 된 리액트 앱을 사용할 것입니다. 첫 번째 줄은 리액트 엘리먼트를 정의합니다. 그 다음 DOM으로부터 노드를 얻습니다. 마지막으로, 컨테이너 안에 리액트 엘리먼트를 생성합니다.
      
      이제 리액트 특유의 코드를 모두 제거하고 이를 순수한 바닐라 자바스크립트로 교체해 봅시다.
      
      const element = <h1 title="foo">Hello</h1>
      const container = document.getElementById("root")
      ReactDOM.render(element, container)
      맨 첫 줄에, JSX로 정의된 엘리먼트가 있습니다. 이는 자바스크립트에서 유효한 문법이 아니므로 바닐라 JS로 교체하기 위해서는 유효한 JS 코드가 필요합니다.
      
      JSX는 바벨과 같은 빌드 툴에 의해 JS 코드로 변환됩니다. 변환은 대체로 간단합니다. 태그 이름, props, children를 매개변수로 넘기는 createElement 함수를 호출하여 태그 내부의 코드를 바꾸면 됩니다.
      
      const element = React.createElement(
        "h1",
        { title: "foo" },
        "Hello"
      )
      
      const container = document.getElementById("root")
      ReactDOM.render(element, container)
      React.createElement 는 인자값들로 객체를 생성합니다. 몇 가지 유효성 검사를 제외하고는 이게 전부입니다. 따라서 안전하게 함수 호출 부분을 그 결과물로 바꿀 수 있습니다.
      
      const element = {
        type: "h1",
        props: {
          title: "foo",
          children: "Hello",
        },
      }
      
      const container = document.getElementById("root")
      ReactDOM.render(element, container)
      그리고 바로 이 element가 type과 props를 객체 속성 값으로 가지는 객체입니다. (사실 실제로는 더 많은 속성이 있지만, 여기서는 두 가지만 신경쓰도록 합니다)
      
      type은 우리가 생성하려는 돔 노드의 타입을 지정하는 문자열입니다. tagName은 HTML 엘리먼트를 생성할 때 document.createElement 에 전달하는 값입니다. 이 부분은 7단계에서 보도록 하겠습니다.
      
      props는 JSX 속성의 key와 value를 포함하고 있는 또 하나의 객체입니다. 이 역시 특별한 children 이라는 특별한 속성을 가집니다.
      
      이 예제에서 children은 문자열입니다. 하지만 일반적으로 더 많은 엘리먼트의 배열의 형태입니다. 이것이 엘리먼트들이 트리 형태인 이유입니다.`,
      author: "BTS",
      date: getUnixTime(new Date(2019, 0, 3)),
      views: 5000
    }
  ]; // axios로 호출해서 받아오면 된다.

  constructor(root) {
    this.root = root;
  }

  // dummy add
  @action
  add = () => {
    const newId = this.nextId;
    console.log("새로 만들 아이디" + newId);
    const exists = this.postItems.find(item => item.id === newId);
    // find 하는 과정이 필요해? id를 유니크하게 관리하면 되지 않나? 동시접속 중일 때는 어떻게 되는거지?
    if (!exists) {
      this.postItems.push({
        id: newId,
        imgUrl:
          "https://post-phinf.pstatic.net/MjAxOTAxMjNfMzkg/MDAxNTQ4MjI3MDQ0NDE0.bLAmatZQBmiRPFNQxoEQl2-hASSRPRHr1k7XQGvCfZ0g.HVxRdK2r2KxyqMoWWVekbHEkj8hacdGHjiFFbiG6Lh8g.JPEG/%EC%8B%AC%EB%A6%AC%ED%85%8C%EC%8A%A4%ED%8A%B81.JPG?type=w1200",
        title: "title" + newId,
        category: "text",
        text: "Hey. This is a test file.",
        author: "TESTER",
        date: getUnixTime(new Date(9999, 8, 20)),
        views: 7777
      });
      this.nextId += 1;
      return;
    }
  };

  @action
  delete = id => {
    this.postItems = this.postItems.filter(item => item.id !== this.nextId - 1);
    this.nextId -= 1;
  };

  @action
  sortByViews = () => {
    const itemsSortByViews = this.postItems.slice().sort((a,b) => b.views - a.views );
    this.postItems = itemsSortByViews
  };

  @action
  sortByIds = () => {
    const itemsSortByIds = this.postItems.slice().sort((a,b) => a.id - b.id );
    this.postItems = itemsSortByIds
  };

  @action
  sortByAuthors = () => {
    const itemsSortByAuthors = this.postItems.slice().sort((a,b) => a.author > b.author ? 1 : -1);
    this.postItems = itemsSortByAuthors
  };

  @action
  sortByDates = () => {
    const itemsSortByDates = this.postItems.slice().sort((a,b) => a.date > b.date ? -1 : 1 );
    this.postItems = itemsSortByDates
  };

  //   @computed
  //   get total() {
  //     console.log("총합 계산...");
  //     return this.selectedItems.reduce((previous, current) => {
  //       return previous + current.price * current.count;
  //     }, 0);
  //   }
}
