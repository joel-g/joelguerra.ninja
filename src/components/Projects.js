import React, { Component } from 'react';
import Back from './Back';
import '../App.css';

class Projects extends Component{
  render() {
    return(
      <article>
      <Back clickHandler={e => this.props.clickHandler(e)}/>
      Projects
      </article>
    )
  }
}

export default Projects;
