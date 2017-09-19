import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../App.css';
import man from '../images/man.png'
import ToggleButton from 'react-toggle-button'


class Home extends Component {
  constructor() {
    super();
    this.state = {
      retro: false
    }
  }

  render() {
    return (
       <div>
        <Header />
        <ToggleButton
  value={ this.state.retro }
  onToggle={(value) => {
    this.setState({
      retro: !value,
    })
  }} />

        <div className='comic'>
          <ul className='links' onClick={ e => this.props.clickHandler(e) }>
            <li className='about-me'>about me</li>
            <li className='projects'>projects</li>
            <li className='resume'>resume</li>
          </ul>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
