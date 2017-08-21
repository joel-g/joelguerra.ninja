import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Home from './components/Home'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: 'Home'
    }
  }

  navClickHandler(e){
    console.log($(e.target).text());
    this.setState({currentDisplay: $(e.target).text()})
  }

  render() {
    return (
      <Home clickHandler={e => this.navClickHandler(e)}/>
    );
  }
}

export default App;
