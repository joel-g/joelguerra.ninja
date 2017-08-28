import React, { Component } from 'react';
import Back from './Back';
import '../App.css';

class Projects extends Component{
  render() {
    return(
      <article>
      <Back clickHandler={e => this.props.clickHandler(e)}/>
      Projects
      <div className='menu'>
      </div>


      


      </article>
    )
  }
}

export default Projects;
