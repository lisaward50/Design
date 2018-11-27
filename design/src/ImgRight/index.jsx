import React, { Component } from 'react';

class ImgRight extends Component {
  render() {
    return (
      <div className="container-fluid px-0">
        <div className="row align-items-center no-gutters">
          <div className="col-lg-6">
            <div className="row justify-content-center order-1 order-lg-2">
              <div className="col-10 col-lg-8">
                <h2 className="mt-4 mb-2 mt-lg-0 mb-lg-3">Optimized Luggage</h2>
                <p className="mb-4 mb-lg-2">Packing for all possible vacation scenarios, whilst keeping your luggage to a minimum can be a challenge. But packing light makes travelling so much quicker and easier. Here are my top tips to help you hand-luggage only travel</p>
                <i className="fas fa-suitcase fa-3x d-none d-lg-inline"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-6 purple">
            <img className="img-fluid" src="images/hat.png"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgRight;
