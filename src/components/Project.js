import React, { Component } from 'react';
import '../Projects.css';

class Project extends Component {
  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        <img className='screenshot' src={this.props.screenShot} />
      </div>
    )
  }
}

export default Project;
