import { observable, action, computed } from "mobx";
import { getUnixTime } from "date-fns";

import agent from "../agent";

export default class PortfolioStore{
    constructor(root){
        this.root=root;
    }

    @observable inProgress = false;
    @observable errors = undefined;

    @observable values = {
        title: "제목을 입력하세요",
        title_back: undefined,
        about: "자신에 대해서 소개해주세요.",
        skills: [],
        email: "이메일을 입력하세요.",
        posts: undefined,
    }

    @action setTitle(title){
        this.values.title = title;
    }
    @action setTitle_Back(title_back){
        this.values.title_back = title_back;
    }
    @action setAbout(about){
        this.values.about = about;
        console.log("about이 바꼈어!!@")
    }
    @action setSkills(skills){
        this.values.skills = skills;
    }
    @action setEmail(email){
        this.values.email = email;
    }
    @action setPosts(posts){
        this.values.posts = posts;
    }
}
