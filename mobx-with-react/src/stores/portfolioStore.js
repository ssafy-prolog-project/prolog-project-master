import { observable, action } from "mobx";
import agent from "../agent";

export default class PortfolioStore{
    constructor(root){
        this.root=root;
    }

    @observable inProgress = false;
    @observable errors = undefined;

    @observable values = {
        about: "", //자신에 대해서 소개해주세요.
        skills: [],
        email: "이메일을 입력하세요.",
        posts: undefined,
    }

    @action setAbout(about){
        this.values.about = about;
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
