import React, { Component } from 'react';
import Footer from './Footer';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <marquee><h1 className='header'>Joel Guerra</h1></ marquee>
        <div>
          <ul className='links'>
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
