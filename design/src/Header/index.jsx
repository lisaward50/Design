import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="container-fluid px-0">
          <div className="row align-items-center no-gutters">
            <div className="col-lg-6">
              <div className="d-none d-lg-block">
                <div className="row justify-content-center">
                  <div className="col-10">
                    <h2 className="mb-3">Maximize <span className="text-white">Your</span> Vacation</h2>
                     <h2 className="mb-4">Minimize <span className="text-white">Travel</span> Hassle</h2>
                    <i className="fas fa-plane fa-3x"></i>
                  </div>
                </div>
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
