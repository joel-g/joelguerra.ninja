import React, { Component } from 'react';
import Header from './Header';
import HeaderMod from './HeaderModern';
import Back from './Back';
import ToggleButton from 'react-toggle-button'
import '../App.css';

class About extends Component {
  render() {
    let header;
    if (this.props.retro) {
      header = <Header text='About Joel' />
    } else {
      header = <HeaderMod text='About Joel' />
    }
    return(
      <article>
        <Back clickHandler={e => this.props.clickHandler(e)}/>
        {header}
        <ToggleButton className='toggle'
          value={ this.props.retro }
          onToggle={ e => this.props.retroifier(e)} />
        <div className='scroll'>
          <div className='scroll-content'>
            <p>  {'Here is a short paragraph about Joel. It features words.'}
            </p>
            <ul>
              <li>{"Joel knows stuff"}</li>
              <li>{"Joel does stuf"}f</li>
            </ul>
          </div>
        </div>
      </article>
    )
  }
}

export default About;
