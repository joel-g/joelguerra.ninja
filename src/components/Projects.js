import React, { Component } from 'react';
import Back from './Back';
import StartMenu from './StartMenu'
import '../App.css';

class Projects extends Component{
  render() {
    return(
      <article>
      <Back clickHandler={e => this.props.clickHandler(e)}/>
      <StartMenu />
      </article>
    )
  }
}

export default Projects;
