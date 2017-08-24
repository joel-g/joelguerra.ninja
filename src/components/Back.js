import React, { Component } from 'react';
import '../App.css';

class Back extends Component {
  render() {
    return(
      <button className='back home' onClick={ e => this.props.clickHandler(e) }>
        {"<-- BACK"}
      </ button>
    )
  }
}

export default Back;
