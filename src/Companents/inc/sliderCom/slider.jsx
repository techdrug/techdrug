import React from 'react';
import { Row, Col, Container,Button } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./style.css"

class SimpleSlider extends React.Component{

    render(){
        // console.log(this.props.sliderAttr);
        const {sliderAttr}= this.props;
        
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

          return (
              <>
              <div className="sliderWrapper">
                <Container>
                    <Slider {...settings}>
                    {sliderAttr.map((sliderContant, index) => (
                        <div key={sliderContant.id}>
                            <Row>
                                <Col md={6}>
                                    <div className="Content-slider">
                                        <h1>{sliderContant.title}</h1>
                                        <p>{sliderContant.desciption}</p>
                                        <div className="btn-warapper">
                                            <Button className="main-btn">Read More</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="slider-image">
                                        <img src={sliderContant.img} alt="" className="img-fluid"/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                    </Slider>
                </Container>
            </div>
            </>
          );
    }
}

export default SimpleSlider;