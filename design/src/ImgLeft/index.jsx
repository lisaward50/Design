import React, { Component } from 'react';
import Text from '../Text';
import Image from '../Image';

class ImgLeft extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <div className="row align-items-center no-gutters">
          <Image />
          <Text />
        </div>
      </div>
    );
  }
}

export default ImgLeft;
