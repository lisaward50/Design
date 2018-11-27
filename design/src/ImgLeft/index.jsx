import React, { Component } from 'react';

class ImgLeft extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <div className="row align-items-center">
          <div className="col-lg-6 green">
            <img className="img-fluid" src="images/hat.png"/>
          </div>
          <div className="col-lg-6">
            <h2>Placeholder Text</h2>
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgLeft;