import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';
import '../Projects.css'
import Back from './Back';
// import Header from './Header';
import Project from './Project';
import whiteboardrSS from '../images/whiteboardr.png';
import policewatchSS from '../images/policewatch.png';
import stormyguerraSS from '../images/stormyguerra.png';
import animalfactsbotSS from '../images/animalfactsbot.png';
import rails from '../images/rails.png';
import ruby from '../images/ruby.png';
import express from '../images/express.png';
import js from '../images/js.png';
import python from '../images/python.jpg';
import reactlogo from '../images/react.png';
import android from '../images/android.jpg';

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
          <Project name='AnimalFactsBot' screenShot={animalfactsbotSS} logo={python} />
          <Project name='Stormyguerra' screenShot={stormyguerraSS} logo={reactlogo} />
          <Project name='Lets Do Lunch' screenShot={android} logo={android} />
        </div>
      </article>
    )
  }
}

export default Projects;
