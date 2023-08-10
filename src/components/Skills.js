import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../img/meter1.svg';
import meter2 from "../img/meter2.svg";
import meter3 from "../img/meter3.svg";
import colorSharp from "../img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    breakLargeDesktop: {
      max: 4000,
      min: 3000,
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>skills</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="items">
                <img src={meter1} alt="" />
                  <h5>Web Development</h5>
                </div>
                <div className="items">
                  <img src={meter2} alt="" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="items">
                  <img src={meter3} alt="" />
                  <h5>Logo Design</h5>
                </div>
                <div className="items">
                  <img src={meter1} alt="" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
