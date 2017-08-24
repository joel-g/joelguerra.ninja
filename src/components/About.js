import React, { Component } from 'react';
import Back from './Back';
import '../App.css';

class About extends Component {
  render() {
    return(
      <article>
        <Back clickHandler={e => this.props.clickHandler(e)}/>
        About
      </article>
    )
  }
}

export default About;
