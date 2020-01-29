import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {GitHubLogin} from 'react-github-login';


class GHLogin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }

    // GitHub Login
    responseGithub = (res) => {
        this.setState({
            id: res.githubId,
            name: res.profileObj.name,
            provider: 'github'
        });
        console.log(this.state.name);
    }
    
    // Login Fail
    responseFail = (err) => {
        console.error(err);
        console.log('FAILED')
    }

    render(){
        return(
            <Container>
                <Github
                    clientId="84894e1e60368c53a385"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                />
            </Container>
        )
    }
}

const Container = styled.div`
    line-height: 4rem;
    width: 30rem;
    height: 4rem;
    background-color: #b32d00;
    display: inline-block;
    margin-top: 3rem;
    color: white;
    cursor: pointer;
`

export default GHLogin;