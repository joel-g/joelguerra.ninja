import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';
import '../Projects.css'
import Back from './Back';
// import Header from './Header';
import Project from './Project';
import whiteboardrSS from '../images/whiteboardr.png';
import policewatchSS from '../images/policewatch.png';
import rails from '../images/rails.png';
import ruby from '../images/ruby.png';
import express from '../images/express.png';
import js from '../images/js.png';

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
        <h1 className='header cant'>Projects</h1>
        <div className='projects-container'>
          <Project name='Whiteboardr' screenShot={whiteboardrSS} logo={ruby} />
          <Project name='Policewatch' screenShot={policewatchSS} logo={js} />
        </div>
      </article>
    )
  }
}

export default Projects;
