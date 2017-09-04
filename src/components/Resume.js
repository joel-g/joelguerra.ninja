import React, { Component } from 'react';
// import spdf from 'simple-react-pdf';
import Back from './Back';

class Resume extends Component {
  render() {
    return(
      <article>
        <Back clickHandler={e => this.props.clickHandler(e)}/>
        Resume
      </article>
    )
  }
}

export default Resume;
