import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: 'home'
    }
  }

  navClickHandler(e){
    console.log($(e.target).text());
    this.setState({currentDisplay: $(e.target).text()})
  }

  render() {
    let display;
    if (this.state.currentDisplay === 'home') {
      display = <Home clickHandler={e => this.navClickHandler(e)} />
    } else if (this.state.currentDisplay === 'about me') {
      display = <About />
    } else if (this.state.currentDisplay === 'projects') {
      display = <Projects />
    } else if (this.state.currentDisplay === 'resume') {
      display = <Resume />
    };
    return (
      {display}
    );
  }
}

export default App;
