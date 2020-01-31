import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import GitHubLogin from 'react-github-login';

require('dotenv').config();

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

class GHLogin extends Component{
    

    render(){
        return(
            <Container>
                <Github
                    clientId={process.env.REACT_APP_GITHUB}
                    buttonText="Github 로그인"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                />
            </Container>
        )
    }
}

export const Github = styled(GitHubLogin)`
    height: 100% !important;
    color: black !important;
    border: 0;
    outline: 0;
    box-shadow: none !important;
    background-color: #00ff0000 !important;
`

const Container = styled.div`
    line-height: 4rem;
    width: 100%;
    height: 4rem;
    background-color: #e6e6e6;
    display: inline-block;
    margin-top: 3rem;
    color: white;
    cursor: pointer;
`

export default GHLogin;