import React, { Component } from 'react';
import '../Projects.css';

class Project extends Component {
  render(){
    return(
      <div className='project '>
        <div className='title cant'>
          <img className='logo' src={this.props.logo} alt='framework logo' />{this.props.name}
          <div className='project-overlay'>
            <div className='project-text'>TEST</div>
          </div>
        </div>
        <img className='screenshot' src={this.props.screenShot} alt='' />
        <div><a href={this.props.url}>{this.props.url}</a></div>
      </div>
    )
  }
}

export default Project;
