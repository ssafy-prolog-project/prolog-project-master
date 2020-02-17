import React, { Component } from "react";
import styled from "styled-components";
import { Edit } from "styled-icons/boxicons-regular/Edit";
import { inject, observer } from "mobx-react";
import DevIcon from "devicon-react-svg";
import SkillItemList from "../SkillItemList";
import SkillComboBox from "../SkillComboBox";

export const EditP = styled(Edit)`
  color: #dcdcdc;
  width: 1rem;
  height: 1rem;
  margin-bottom: 2.4rem;
`;

export const Icon = styled(DevIcon)`
  width: 3rem;
  height: 3rem;
`;

@inject("portfolioStore")
@observer
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      input: "",
      skills: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = e => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  handleClick = () => {
    if (this.state.isEdit) {
      this.props.portfolioStore.setSkills(this.state.skills);
    }
    const { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit
    });
  };

  handleChangeSkills = values => {
    this.setState({
      skills: values
    });
    console.log(values);
    console.log(this.state.skills);
  };

  render() {
    const { input, skills } = this.state;

    const commonView = (
      <SkillsLayout>
        <SkTitle>
          Skills
          <EditP onClick={this.handleClick} />
        </SkTitle>
        <SkContent>
          <SkillItemList skills={this.state.skills} />
        </SkContent>
      </SkillsLayout>
    );

    const editView = (
      <SkillsLayout>
        <SkTitle>
          Skills
          <EditP onClick={this.handleClick} />
        </SkTitle>
        <SkContent>
          <SkillComboBox
            skills={this.state.skills}
            change={this.handleChangeSkills}
          ></SkillComboBox>
          <SkillItemList skills={this.props.portfolioStore.skills} />
        </SkContent>
      </SkillsLayout>
    );

    return <div>{this.state.isEdit ? editView : commonView}</div>;
  }
}

const SkillsLayout = styled.div`
  grid-area: skills;
  height: 100%;
  width: auto;
  padding: 5%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SkTitle = styled.div`
  text-align: center;
  font-size: 2.4rem;
`;

const SkContent = styled.div`
  text-align: center;
  padding: 2%;

  @media (max-width: 768px) {
    display: inline-block;
    margin-top: 0;
    margin-right: 0;
    width: auto;
    padding: 1rem;
  }
`;

const Input = styled.input`
  /* white-space: pre-wrap; */
  margin-top: 1rem;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  border: 1px solid #e9ecef;
  color: #212529;
  display: block;
  line-height: 1.5;
  height: 10rem;
`;

export default Skills;
