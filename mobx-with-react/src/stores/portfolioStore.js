import { observable, action } from "mobx";
import agent from "../agent";

export default class PortfolioStore{
    constructor(root){
        this.root=root;
    }

    @observable inProgress = false;
    @observable errors = undefined;

    @observable values = {
        greeting: "", //자신에 대해서 소개해주세요.
        skills: [],
        email: "",
        repository: "",
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

    @action setRepository(repository){
        this.values.repository = repository
    }
    @action setPosts(posts){
        this.values.posts = posts;
    }

    @action getPortfolioData(id){
        agent.Auth.getStack(id).then(
            res => {
            //   console.log(res.data.data)
              const { techs, email, greeting, repository } = res.data.data
              this.setAbout(greeting)
              this.setEmail(email)
              this.setRepository(repository)
              this.setSkills(techs)
              console.log(this.values)
            }        
          )
    }

    @action saveSkills(){
        
    }
}
