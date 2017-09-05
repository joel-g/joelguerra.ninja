import React, { Component } from 'react';
import '../Projects.css';

class Project extends Component {
  render(){
    return(
      <div className='project'>
        <div className='title cant'>
          <img className='logo' src={this.props.logo} alt='framework logo' />{this.props.name}
        </div>
        <img className='screenshot' src={this.props.screenShot} alt='' />
      </div>
    )
  }
}

export default Project;
