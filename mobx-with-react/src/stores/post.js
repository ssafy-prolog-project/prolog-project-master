import { observable, action, computed } from "mobx";

// imageUrl, Title, category, text, likes, comments, created_at, updated_at , author
export default class PostStore {
    @observable nextId = 8;
  @observable postItems = [{
    id: 1,
    imgUrl: "http://image.itdonga.com/files/2015/09/04/001.jpg",
    title: "test1",
    category: "post",
    text: "test 중..",
    author: "JEJ",
    date: "3/2/2019"
  },
  {
    id: 2,
    imgUrl: "",
    title: "test2",
    category: "post",
    text: "test 중입니다.",
    author: "JKY",
    date: "3/2/2019"
  },
  {
    id: 3,
    imgUrl: "",
    title: "test3",
    category: "post",
    text: "test 중입니다.",
    author: "JKY",
    date: "3/2/2019"
  },
  {
    id: 4,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpw1rVXmdKGZf0_yS-e5PwKbYRLo8f1MZUiO-acYrpvoLW958LKA&s",
    title: "test4",
    category: "post",
    text: "test 중입니다.",
    author: "JKY",
    date: "3/2/2019"
  },
  {
    id: 5,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-eFK8MWNHaejgL5U5jP4Nr6BjrG6CSH8fLcTdVB-zaG2TBN2&s",
    title: "test5",
    category: "post",
    text: "test 중입니다.",
    author: "JKY",
    date: "3/2/2019"
  },
  {
    id: 6,
    imgUrl:
      "data:image/jpeg;base64,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",
    title: "test6",
    category: "post",
    text: "test 중입니다.",
    author: "JKY",
    date: "3/2/2019"
  },
  {
    id: 7,
    imgUrl:
      "https://us.123rf.com/450wm/triken/triken1512/triken151200026/49643599-%EA%B0%84%EB%8B%A8%ED%95%9C-%EA%B7%B8%EB%9D%BC%EB%94%94%EC%96%B8%ED%8A%B8-%EA%B7%80%EC%97%AC%EC%9A%B4-%EB%A7%8C%ED%99%94-%EB%8F%8C%EA%B3%A0%EB%9E%98%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%AA%A8%EB%93%A0-%EB%8B%A8%EC%B8%B5%ED%95%9C%EB%8B%A4-.jpg?ver=6",
    title: "test7",
    category: "post",
    text: "test 중입니다.",
    author: "JKY",
    date: "3/2/2019"
  }
]; // axios로 호출해서 받아오면 된다.

  constructor(root) {
    this.root = root;
  }

  // dummy add
  @action
  add = () => {
    const newId = this.nextId;
    console.log("새로 만들 아이디" + newId)
    const exists = this.postItems.find(item => item.id === newId);
    // find 하는 과정이 필요해? id를 유니크하게 관리하면 되지 않나? 동시접속 중일 때는 어떻게 되는거지?
    if (!exists) {
      this.postItems.push({
        id: newId,
        title: "title"+ newId,
        category: "text",
        author: "TESTER",
        text: "Hey. This is a test file.",
        imgUrl : "https://post-phinf.pstatic.net/MjAxOTAxMjNfMzkg/MDAxNTQ4MjI3MDQ0NDE0.bLAmatZQBmiRPFNQxoEQl2-hASSRPRHr1k7XQGvCfZ0g.HVxRdK2r2KxyqMoWWVekbHEkj8hacdGHjiFFbiG6Lh8g.JPEG/%EC%8B%AC%EB%A6%AC%ED%85%8C%EC%8A%A4%ED%8A%B81.JPG?type=w1200"
      });
      this.nextId += 1;
      return;
    }
  };

  @action
  delete = id => {
      this.postItems = this.postItems.filter(item => item.id !== id);
  }

//   @action
//   sortByTitle = () => {
//       //?
//   }

// get? 
//   @action
//   get = id => {
//     const itemToTake = this.selectedItems.find(item => item.id === id);
//   };

//   @computed
//   get total() {
//     console.log("총합 계산...");
//     return this.selectedItems.reduce((previous, current) => {
//       return previous + current.price * current.count;
//     }, 0);
//   }
}