import React, { Component } from 'react';
import Back from './Back';
import '../App.css';

class About extends Component {
  render() {
    return(
      <article>
        <Back clickHandler={e => this.props.clickHandler(e)}/>
        <h1 className='about-header comic'>About Joel</h1>
        <div className='scroll'>
          <p>Here is a short paragraph about Joel. It features words.
          </p>
          <ul>
            <li>Joel knows stuff</li>
            <li>Joel does stuff</li>
          </ul>
        </div>
      </article>
    )
  }
}

export default About;
