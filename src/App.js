import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';


class App extends Component {
  constructor() {
    super();
    this.state = {
      retro: false,
      currentDisplay: 'home'
    }
  }

  navClickHandler(e){
    this.setState({ currentDisplay: $(e.target).text() })
  }

  retroifier(e){
    this.setState({ retro: !this.state.retro })
  }

  render() {
    if (this.state.retro) {
      $('body').addClass('gradient')
    } else {
      $('body').removeClass('gradient')
    }
    let display;
    if (this.state.currentDisplay === 'home' || this.state.currentDisplay === "<-- BACK") {
      display = <Home retroifier={e => this.retroifier(e) } retro={this.state.retro} clickHandler={e => this.navClickHandler(e)} />
    } else if (this.state.currentDisplay === 'about me') {
      display = <About retroifier={e => this.retroifier(e) } retro={this.state.retro} clickHandler={e => this.navClickHandler(e)}/>
    } else if (this.state.currentDisplay === 'projects') {
      display = <Projects clickHandler={e => this.navClickHandler(e)}/>
    } else if (this.state.currentDisplay === 'resume') {
      display = <Resume clickHandler={e => this.navClickHandler(e)}/>
    };
    return (
      display
    );
  }
}

export default App;
