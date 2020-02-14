import axios from "axios";
import commonStore from "./stores/commonStore";
import authStore from "./stores/authStore";

const API_ROOT = "http://localhost:8080";
//const API_ROOT = "";
const VERSION = "/v1"
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
  del: url =>
    axios
      .delete(`${API_ROOT}${VERSION}${url}`)
      .then(res => console.log(res))
      .catch(err => console.log(err)),
  get: (url, header) =>
    axios
      .get(`${API_ROOT}${VERSION}${url}`,{headers: header})
      .then(res => console.log(res))
      .catch(err => console.log(err)),
  post: (url, body, header) =>
    axios
      .post(`${API_ROOT}${VERSION}${url}`, body, {headers: header})
      .then(res => console.log(res))
      .catch(err => console.log(err)),
  put: (url, body) =>
    axios
      .put(`${API_ROOT}${VERSION}${url}`, body)
      .then(res => console.log(res))
      .catch(err => console.log(err))
};

// 토큰은 다 헤더로 넘기고, 나머지 정보만 body로 넘긴다.
const Auth = {
    //회원 가입, 로그인
    register : (snsAccessToken, provider, name) =>
    requests.post(`/v1/signup/${provider}`, {name :name}, {accessToken: snsAccessToken}),
    login : (snsAccessToken, provider) =>
    requests.post(`/v1/signin/${provider}`,{},{accessToken:snsAccessToken}),
    //requests.get(`/helloworld/string`),
    //회원정보 조회
    current: () =>
    requests.get('/v1/user'),
    update : (snsAccessToken, user) =>
    requests.put('/v1/user', {accessToken : snsAccessToken, user : user}),
}

// page 로드를 어떻게 처리할거냐?
const omitId = post => Object.assign({}, post,  {id: undefined})

const Posts = { 
  
  all : () => 
  requests.get('/v1/posts'),

  byAuthor : () => 
  requests.get(`/v1/post`),
  
  create: (post) =>
  requests.post('/post', {post}),

  update: post => 
  requests.put(`/v1/post/${post.id}`, { post}),
  
  get: id =>
  requests.get(`/v1/post/${id}`),
  
  del: id => 
  requests.del(`/v1/post/${id}`)

}

const Comments = { 
  forPost : postId => 
  console.log('forPost Comment요청'),
  //requests.get(`/v1/posts/${postId}/comments`),
  create: (postId, comment) =>
  //requests.post(`/v1/posts/${postId}/comments`, {comment}),
  console.log('Comment Create요청'),
  // 수정을 구현할거인가?
  // update: (postId, id, comment) => 
  // requests.put(`/v1/posts/${postId}/comments/${id}`, { comment: omitId(comment)}),
  delete: (postId, commentId) => 
  console.log('comment Delete 요청'),
  //requests.del(`/v1/posts/${postId}/comments/${commentId}`)
}



export default {
    Auth,
    Posts,
    Comments
}