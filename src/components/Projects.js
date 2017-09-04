import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';
import Back from './Back';
import Header from './Header';
import StartMenu from './StartMenu'

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      currentProject: 'none'
    }
  }

  projectClickHandler(e){
    this.setState({currentProject: $(e.target).text()})
  }

  render() {
    return(
      <article className='projects-page'>
      <Back clickHandler={e => this.props.clickHandler(e)}/>
      <Header />

      </article>
    )
  }
}

export default Projects;
