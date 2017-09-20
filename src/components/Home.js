import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import HeaderMod from './HeaderModern'
import '../App.css';
import man from '../images/man.png'
import ToggleButton from 'react-toggle-button'


class Home extends Component {

  render() {
    let footer;
    let header;
    if (this.props.retro) {
      footer = <Footer />
      header = <Header text='Joel Guerra'/>
    } else {
      header = <HeaderMod text='Joel Guerra'/>
    }
    return (
       <div>
        {header}
        <ToggleButton className='toggle'
          value={ this.props.retro }
          onToggle={ e => this.props.retroifier(e)} />
        <div className='comic'>
          <ul className='links' onClick={ e => this.props.clickHandler(e) }>
            <li className='about-me'>about me</li>
            <li className='projects'>projects</li>
            <li className='resume'>resume</li>
          </ul>
        </div>
        {footer}
      </div>
    )
  }
}

export default Home;
