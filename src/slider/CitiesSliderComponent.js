import React, { Component } from "react";
import classNames from "classnames";

export default class CitiesSliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  changeSlides(change) {}

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;

    return (
      <div className="slider">
        <p className="slider__top-heading">Travelers</p>

        <div className="slider__slides">
          <div className="slider__slide">
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">Subhead</h3>
              <h2 className="slider__slide-heading">Heading</h2>
              <p className="slider__slide-readmore">Read More</p>
            </div>
            <div className="slider__slide-parts">
              <div className="slider__slide-part">
                <div className="slider__slide-part-inner"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider__control"></div>
        <div className="slider__control slider__control-right"></div>
      </div>
    );
  }
}
