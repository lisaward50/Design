import React, { Component } from 'react';
import Header from '../Header';
import ImgLeft from '../ImgLeft';
import ImgRight from '../ImgRight';

class Main extends Component {
  render() {
    return (
      <div id="main">
        <Header />
        <ImgLeft title="Optimized Luggage" link="images/bag.jpeg" text="Packing for all possible vacation scenarios, whilst keeping your luggage to a minimum can be a challenge. But packing light makes travelling so much quicker and easier. Here are my top tips to help you hand-luggage only travel"/>
        <div id="clothing"></div>
        <ImgRight title="Clothing" link="images/tshirt.jpeg" text="Always pack for the climate for your destination. For warm countries, t-shirts take-up much less space! Take only one or two bulky items (sweaters, shoes), pick one that matches with everything! Pack some handwash liquid for a mid-vacation wash"/>
        <div id="toiletries"></div>
        <ImgLeft title="Toiletries" link="images/soap.jpeg" text="Pack what you really need, leave out big liquid items you can buy when you get there (e.g. shampoo and conditioner) and cut out liquids when you can (e.g. take face wipes). If you get it right you only need to take hand luggage"/>
      </div>
    );
  }
}

export default Main;
