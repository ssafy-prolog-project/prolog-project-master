import React, { Component} from 'react'
import HeadlinesPicker from '../HeadlinesPicker'
import styled from 'styled-components'

class HeadlinesButton extends Component {
  // When using a click event inside overridden content, mouse down
  // events needs to be prevented so the focus stays in the editor
  // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()
  onMouseDown = (event) => event.preventDefault()

  onClick = () =>
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    this.props.onOverrideContent(HeadlinesPicker);

  render() {
    return (
      <HeadLineButtonWrapper onMouseDown={this.onMouseDown}>
        <HeadLineButton onClick={this.onClick}>
          H
        </HeadLineButton>
      </HeadLineButtonWrapper>
    );
  }
}

export default HeadlinesButton

const HeadLineButtonWrapper = styled.div`
display: inline-block;
`

const HeadLineButton = styled.button`
  background: #fbfbfb;
  color: #888;
  font-size: 18px;
  border: 0;
  padding-top: 5px;
  vertical-align: bottom;
  height: 34px;
  width: 36px;
  :hover,
  :focus {
  background: #f3f3f3;
}
`