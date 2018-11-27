import React, { Component } from 'react';
import Header from '../Header';
import ImgLeft from '../ImgLeft';
import ImgRight from '../ImgRight';

class Main extends Component {
  render() {
    return (
      <div id="main">
        <Header />
        <ImgLeft />
        <ImgRight />
      </div>
    );
  }
}

export default Main;
