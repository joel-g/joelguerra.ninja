import React, { Component } from 'react';
import Back from './Back';
import '../App.css';

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
