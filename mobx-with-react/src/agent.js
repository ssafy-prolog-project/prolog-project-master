import axios from "axios";
import authStore from "./stores/authStore";
import userStore from "./stores/userStore";

//const API_ROOT = "http://70.12.229.94:8080";
const API_ROOT = "/";
const VERSION = "v1";
//const VERSION = ""

const encode = encodeURIComponent;

const handleErrors = err => {
  if (err && err.response && err.response.stauts === 401) {
    console.log("허용되지 않은 접근입니다. ");
    // 어떻게 동작시키지?
  }
  return err;
};

const responseBody = res => res.body;

// http request : get, post, del, put
const requests = {
  del: (url, header) =>
    axios.delete(`${API_ROOT}${VERSION}${url}`, { headers: header }),

  get: (url, header) =>
    axios.get(`${API_ROOT}${VERSION}${url}`, { headers: header }),

  post: (url, body, header) =>
    axios.post(`${API_ROOT}${VERSION}${url}`, body, { headers: header }),
  put: (url, body, header) =>
    axios.put(`${API_ROOT}${VERSION}${url}`, body, { headers: header })
};

// 토큰은 다 헤더로 넘기고, 나머지 정보만 body로 넘긴다.
const Auth = {
    intro_update: (intro) =>
    requests.put('/user/greeting',{greeting: intro},{"X-AUTH-TOKEN": window.sessionStorage.getItem("jwt")}),
    
    email_update: (email) =>
    requests.put('/user/email',{email: email},{"X-AUTH-TOKEN": window.sessionStorage.getItem("jwt")}),
    
    name_update: (name) =>
    requests.put('/user/name',{name: name},{"X-AUTH-TOKEN": window.sessionStorage.getItem("jwt")}),
    
    // id로 회원정보 조회
    get: id =>
    requests.get(`/user/${id}`),
    // 기술스택 조회
    getStack: id => 
    requests.get(`/techs/${id}`),
    // 기술스택 저장
    setStack:  skills =>
    requests.post(`/techs`,{techs: skills},{"X-AUTH-TOKEN": window.sessionStorage.getItem("jwt")})
    ,
    getUserInfo: (jwt) =>{
      return requests.get('/user', {"X-AUTH-TOKEN": jwt})
    },
    //회원 가입, 로그인
  register: (snsAccessToken, snsRefreshToken, provider, name) =>
  requests.post(
    `/signup/${provider}`,
    { name: name },
    { accessToken: snsAccessToken, refreshToken: snsRefreshToken }
  ),
  login: (snsAccessToken, snsRefreshToken, provider) => {
  return requests.post(
    `/signup/${provider}`,
    {},
    { accessToken: snsAccessToken, refreshToken: snsRefreshToken }
  );
  },

  update: (snsAccessToken, snsRefreshToken, user) =>
  requests.put("/user", {
    accessToken: snsAccessToken,
    refreshToken: snsRefreshToken,
    user: user
  }),

  getOtherInfo: (msrl) =>{
    return requests.get(`/user/${msrl}`, {})
  },
}


// page 로드를 어떻게 처리할거냐?
const omitId = post => Object.assign({}, post, { id: undefined });

const Posts = {
  all: () => requests.get("/postsAll"),

  byAuthorPublic: id => requests.get(`/post/user/${id}`),

  byAuthor: () => requests.get(`/post`),

  create: post => {
    // if(window.sessionStorage.getItem("jwt")==null || window.sessionStorage.getItem("jwt")=="") new Error("로그인 하러 가자!")
    requests.post(
      "/post",
      {
        title: post.title,
        coverColor: post.coverColor,
        coverImage: post.coverImage,
        body: post.body,
        tagList: post.tagList
      },
      { "X-AUTH-TOKEN": window.sessionStorage.getItem("jwt") }
    );
  },
  update: post => {
    return requests.put(
      `/post/${post.postCode}`,
      {
        title: post.title,
        coverColor: post.coverColor,
        coverImage: post.coverImage,
        body: post.body,
        tagList: post.tagList
      },
      { "X-AUTH-TOKEN": window.sessionStorage.getItem("jwt") }
    );
  },

  get: id => requests.get(`/post/${id}`),

  del: id =>
    requests.del(`/post/${id}`, {
      "X-AUTH-TOKEN": window.sessionStorage.getItem("jwt")
    }),

  search: searchText => requests.get(`/post/search/${searchText}`)
};

const Comments = {
  forPost: postId => console.log("forPost Comment요청"),
  //requests.get(`/v1/posts/${postId}/comments`),
  create: (postId, comment) =>
    //requests.post(`/v1/posts/${postId}/comments`, {comment}),
    console.log("Comment Create요청"),
  // 수정을 구현할거인가?
  // update: (postId, id, comment) =>
  // requests.put(`/v1/posts/${postId}/comments/${id}`, { comment: omitId(comment)}),
  delete: (postId, commentId) => console.log("comment Delete 요청")
  //requests.del(`/v1/posts/${postId}/comments/${commentId}`)
};

const Tags = {
  getTags: userId => requests.get(`/tags/${userId}`)
};

export default {
  Auth,
  Posts,
  Comments,
  Tags
};
