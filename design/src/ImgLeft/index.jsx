import React, { Component } from 'react';

class ImgLeft extends Component {
  render() {
    const { title, text, link, icon } = this.props;
    return (
      <div className="container-fluid px-0">
        <div className="row align-items-center no-gutters">
          <div className="col-lg-6 order-2 order-lg-1 green">
            <img className="img-fluid" src={link}/>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8">
                <h2 className="mt-4 mb-2 mt-lg-0 mb-lg-3">{title}</h2>
                <p className="mb-4 mb-lg-2">{text}</p>
                <i className="fas fa-suitcase fa-3x d-none d-lg-inline"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgLeft;
