import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import './owl.css';  
export class Owldemo1 extends Component {
  render() {
    return (
      <div>
        <div class='container-fluid' >
          <div className="row title" style={{ marginBottom: "0px" }} >
            <div class="col-sm-12 btn btn-info">
              {/* Owl Carousel In React Application    */}
            </div>
          </div>
        </div>
        <div class='container-fluid' >
          <OwlCarousel items={1}
            className="owl-theme"
            loop
            nav
            margin={0}
            autoplay={true}
            autoplaySpeed={1000}
            dots={false}
          >
            <div ><img className="img" src={require(`./img/1.jpeg`)} /></div>
            <div ><img className="img" src={require(`./img/5.webp`)} /></div>
            <div ><img className="img" src={require(`./img/2.webp`)} /></div>
            <div ><img className="img" src={require(`./img/3.webp`)} /></div>
            <div ><img className="img" src={require(`./img/4.webp`)} /></div>
            <div ><img className="img" src={require(`./img/7.webp`)} /></div>
          </OwlCarousel>
        </div>

      </div>
    )
  }
}


export default Owldemo1;