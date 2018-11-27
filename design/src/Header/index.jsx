import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="container-fluid px-0">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="d-none d-lg-block">
                <h2>Placeholder Text</h2>
                <p>lorem ipsum</p>
              </div>
            </div>
            <div className="col-lg-6">
              <img id="sunglasses" className="img-fluid" src="images/sunglasses_2.jpeg"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
