import React, { Component } from 'react';
import spdf from "simple-react-pdf";
import Back from './Back';
import '../App.css';

class Resume extends Component {
  render() {
    return(
      <article>
        <Back clickHandler={e => this.props.clickHandler(e)}/>
        Resume
        <spdf.SimplePDF
          file="./JoelGuerra _Resume5.pdf"
          />
      </article>
    )
  }
}

export default Resume;
