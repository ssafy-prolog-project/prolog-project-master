import agent from "../agent";
import { observable, action, computed } from "mobx";
import {RouteComponentProps} from "react-router-dom";
import { getUnixTime } from "date-fns";

// imageUrl, Title, category, text, likes, comments, created_at, updated_at , author
export default class PostStore {
  // map으로 관리하는게 더 빠름.
  @observable isLoading = false;
  @observable postRegistry = observable.map();
  @observable predicate = {};

  @computed get length() {
    return this.postItems.length;
  }

  @computed get posts() {
    return this.postRegistry.values();
  }

  clear() {
    this.postRegistry.clear();
  }

  getPost(id) {
    //TODO
    //return this.postRegistry.get(id);
    return this.postItems[id]
  }

  //이전 정보를 정리해둔다.
  @action setPredicate(predicate) {
    if (JSON.stringfy(predicate) === JSON.stringfy(this.predicate)) return;
    this.clear();
    this.predicate = predicate;
  }

  // 전체 Post 가져오기
  @action loadPosts() {
    this.isLoading = true;
    // TODO
    // return agent.Posts.get()
    // .then(action(() => 
    // {
    //   this.articleRegistry.set(post.id, post)
    //   return post;
    // }
    // ) )
    // .finally(action(() => { this.loading = false}))
  }

  // 한 개짜리 가져오기 - 이미 가져온 것은 map 에서 바로 꺼내고, 아닌 경우는 백엔드서버에서 호출한다.
  @action loadPost(id, { acceptCached = false } = {}) {
    //TODO
    acceptCached = true;
    if (acceptCached) {
      const post = this.getPost(id);
      if (post) {
        return Promise.resolve(post);
      }
    }
    this.isLoading = true;
    return agent.Posts.get(id)
    .then(action(({post}) => 
    {
      this.articleRegistry.set(post.id, post)
      return post;
    }
    ) )
    .finally(action(() => { this.loading = false}))
  }

  @action createPost(post) {
    console.log("여기가 두번쩨!!!!!");
    console.log(post);
    return agent.Posts.create(post)
    .then(res => 
      console.log(res.data)
      
      )
    .catch(err => console.log(err))
    // .then(action(({ post }) => 
    // {
    //   this.postRegistry.set(post.postCode, post);
    //   return post;
    // }
    // ));
  }

  

  @action updatePost(post) {
    return agent.Posts.create(post).then(({ post }) => {
      this.postRegistry.set(post.id, post);
      return post;
    });
  }

  @action deletePost(id) {
    return agent.Posts.del(id).then(
      action(err => {
        this.loadPosts();
        throw err;
      })
    );
  }



  @observable nextId = 31;
  @observable returnItems = [];
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
      author: "정의진",
      date: getUnixTime(new Date(2018, 2, 2)),
      views: 305
    },
    {
      id: 2,
      imgUrl: "",
      title: "test3",
      category: "post",
      text: "test 중입니다.",
      author: "CK",
      date: getUnixTime(new Date(2018, 4, 2)),
      views: 999
    },
    {
      id: 3,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpw1rVXmdKGZf0_yS-e5PwKbYRLo8f1MZUiO-acYrpvoLW958LKA&s",
      title: "미래의 글",
      category: "post",
      text: "test 중입니다.",
      author: "한글",
      date: getUnixTime(new Date(2020, 2, 5)),
      views: 10
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
    const itemsSortByViews = this.postItems
      .slice()
      .sort((a, b) => b.views - a.views);
    this.postItems = itemsSortByViews;
  };

  @action
  sortByIds = () => {
    const itemsSortByIds = this.postItems.slice().sort((a, b) => a.id - b.id);
    this.postItems = itemsSortByIds;
  };

  @action
  sortByAuthors = () => {
    const itemsSortByAuthors = this.postItems
      .slice()
      .sort((a, b) => (a.author > b.author ? 1 : -1));
    this.postItems = itemsSortByAuthors;
  };

  @action
  sortByDates = () => {
    const itemsSortByDates = this.postItems
      .slice()
      .sort((a, b) => (a.date > b.date ? -1 : 1));
    this.postItems = itemsSortByDates;
  };

  @action
  getItems = (startIndex, count) => {
    this.returnItems = this.postItems.slice(startIndex, startIndex + count);
  };
}
