import { observable, action, computed } from "mobx";

// imageUrl, Title, category, text, likes, comments, created_at, updated_at , author
export default class PostStore {
    @observable nextId = 8;
  @observable postItems = [{
    id: 1,
    imgUrl: "http://file2.instiz.net/data/file/20141221/2/0/2/2027c83dca8a9b5658498d9e641153b1.jpg",
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
      "https://i.pinimg.com/originals/72/75/38/727538673ef8a884113e5c134e9bf228.jpg",
    title: "test5",
    category: "post",
    text: "test 중입니다.",
    author: "JKY",
    date: "3/2/2019"
  },
  {
    id: 6,
    imgUrl:
      "http://img1.photons.co.kr/site12/201904/l/5cb678acc2e7820190417095156798307.jpg",
    title: "test6",
    category: "post",
    text: "test 중입니다.",
    author: "JKY",
    date: "3/2/2019"
  },
  {
    id: 7,
    imgUrl:
      "https://mb.ntdtv.kr/assets/uploads/2018/07/51186da4320abb1602e1b89ee881abd3-795x436.jpg",
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
