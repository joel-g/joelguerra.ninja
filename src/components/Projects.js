import React, { Component } from 'react';
import Back from './Back';
import StartMenu from './StartMenu'
import '../App.css';

class Projects extends Component{
  render() {
    return(
      <article className='projects-page'>
      <Back clickHandler={e => this.props.clickHandler(e)}/>

      </article>
    )
  }
}

export default Projects;
