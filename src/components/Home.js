import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../App.css';
import man from '../images/man.png'

class Home extends Component {
  render() {
    return (
       <div>
        <Header />
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
