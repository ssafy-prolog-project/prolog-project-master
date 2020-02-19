import { observable, action } from "mobx";
import agent from "../agent";
import { launguageDict } from "../components/Portfolio/data";

export default class PortfolioStore{
    constructor(root){
        this.root=root;
    }

    @observable inProgress = false;
    @observable errors = undefined;

    @observable values = {
        greeting: "",
        skills: [],
        email: "",
        repository: "",
        posts: undefined,
    }

    @action setGreeting(greeting){
        this.values.greeting = greeting;
    }
    @action setSkills(skills){
        this.values.skills = skills;
    }
    @action setEmail(email){
        this.values.email = email;
    }
    @action setRepository(repository){
        this.values.repository = repository;
    }
    @action setPosts(posts){
        this.values.posts = posts;
    }

    @action getPortfolioData(id){
        agent.Auth.getStack(id).then(
            res => {
              console.log(res.data.data)
              const { techs, email, greeting, repository } = res.data.data
              this.setGreeting(greeting)
              this.setEmail(email)
              this.setRepository(repository)
              console.log(this.values)
              if (techs){
                // const skills = JSON.parse(techs)
                // const skills2 = JSON.parse(skills)
                // console.log(skills)
                // console.log(skills2)
                //  console.log(typeof skills2)
                //  console.log(typeof techs)
                // // console.log(skills)
                // // console.log(typeof skills)                
                // // console.log(typeof techs)                
                // // console.log(skills.react)
                
                // // const skills2 = { 'react' : '1', 'javascript' : '1' }
                // // console.log(skills2)
                // const options = [] 
                // for(let item in skills2){
                //     options.push(launguageDict[item])
                // }
                // //console.log(options)                
                // //this.setSkills(this.convertStringArrayToOption(skills))
                // this.setSkills(options)
              }
            }        
          )
    }

    @action saveSkills(){
        let tech = ""
        if (this.values.skills){
            const skillsString = this.values.skills.map((item)=> item.value)
            var json = new Object();
            for(let i =0; i< this.values.skills.length;i++){
                const name = this.values.skills[i].value
                json[name] = 1
            }
            console.log(json)
            console.log(JSON.stringify(json))
            //tech = JSON.stringify(json)
            tech = json
            //tech = skillsString.join()
        }
        
        console.log("save")
        console.log(tech)
        console.log(window.sessionStorage.getItem("jwt"))
        // 예시
        // {
        //     "techs": "{ react : 1, javascript : 1 }"
        //   }
        agent.Auth.setStack(tech).then(res => console.log(res.data.data))
    }

    @action convertStringArrayToOption = arr => {
        const options = arr.map((item)=> launguageDict.get(item))
        console.log("options")
        console.log(options)
        return options
      }
}



