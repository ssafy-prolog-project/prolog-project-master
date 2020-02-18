import React from "react";
import Select, { components } from "react-select";
import { programmingLanguages } from "../data";

const IndicatorsContainer = props => {
  return (
    <div style={{ background: "#0052CC" }}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

export default class SkillComboBox extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption })
    this.props.change(selectedOption)
  };

  render() {
    return (
      <Select
        onChange={this.handleChange}
        closeMenuOnSelect={false}
        components={{ IndicatorsContainer }}
        defaultValue={[]}
        isMulti
        isSearchable={true}
        options={programmingLanguages}
      />
    );
  }
}
