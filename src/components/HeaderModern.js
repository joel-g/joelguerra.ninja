import React, { Component } from 'react';
import '../Modern.css';

class Header extends Component {

  render() {
    return (
      <div>
        <h1 style={style} className='header'>{this.props.text}</h1>
      </div>
    )
  }
};

const style = {
  fontStyle: 'italic'
}

export default Header;
