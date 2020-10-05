import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

class SimpleSlider extends React.Component{
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          const mystyle = {
            backgroundColor: "#f8f9fa",
            padding: "15px",
          };
          return (
              <div className="sliderWrapper" style={mystyle}>
                <Container>
                    <Slider {...settings}>
                    <div>
                        <Row>
                            <Col xs={6}>
                                <div className="Content-slider">

                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="slider-image">
                                    
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col xs={6}>1 of 1</Col>
                            <Col xs={6}>1 of 1</Col>
                        </Row>
                    </div>
                    </Slider>
                </Container>
            </div>
          );
    }
}

export default SimpleSlider;