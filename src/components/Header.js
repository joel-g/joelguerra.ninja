import React, { Component } from 'react';
import '../App.css';

class Header extends Component {

  render() {
    return (
      <div>
        <marquee><h1 className='header colorize comic'>{this.props.text}</h1></ marquee>
      </div>
    )
  }
};

export default Header;
