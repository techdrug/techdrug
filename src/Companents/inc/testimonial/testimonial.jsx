import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss';

class Testimonial extends React.Component{
    render(){
        var settings = {
            centerMode: true,
            centerPadding: "40px",
            dots: true,
            slidesToShow: 3,
            infinite: true,
            arrows: false,
            lazyLoad: "ondemand",
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
                },
                {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
                }
            ]
          };
        return(
            <>
            <Slider {...settings}className="testimonial-reel">
                <div>

                    <div className="box">

                        <figure className="image">
                            <img className="img-fluid rounded-circle" src="https://www.w3schools.com/howto/img_avatar.png"/>
                        </figure>

                        <div className="test-component">

                            <article className="test-title">

                                <h4>
                                    Efecha Omoware
                                </h4>

                            </article>


                            <article className="test-content">
                                <p>
                                    I now enjoy financial freedom like I’ve never know before doing what I love.
                                </p>
                            </article>

                        </div>

                    </div>

                </div>
                <div>

                    <div className="box">

                        <figure className="image">
                            <img className="img-fluid rounded-circle" src="https://www.w3schools.com/howto/img_avatar.png"/>
                        </figure>

                        <div className="test-component">

                            <article className="test-title">

                                <h4>
                                    Efecha Omoware
                                </h4>

                            </article>


                            <article className="test-content">
                                <p>
                                    I now enjoy financial freedom like I’ve never know before doing what I love.
                                </p>
                            </article>

                        </div>

                    </div>

                </div>
                <div>

                    <div className="box">

                        <figure className="image">
                            <img className="img-fluid rounded-circle" src="https://www.w3schools.com/howto/img_avatar.png"/>
                        </figure>

                        <div className="test-component">

                            <article className="test-title">

                                <h4>
                                    Efecha Omoware
                                </h4>

                            </article>


                            <article className="test-content">
                                <p>
                                    I now enjoy financial freedom like I’ve never know before doing what I love.
                                </p>
                            </article>

                        </div>

                    </div>

                </div>
                <div>

                    <div className="box">

                        <figure className="image">
                            <img className="img-fluid rounded-circle" src="https://www.w3schools.com/howto/img_avatar.png"/>
                        </figure>

                        <div className="test-component">

                            <article className="test-title">

                                <h4>
                                    Efecha Omoware
                                </h4>

                            </article>


                            <article className="test-content">
                                <p>
                                    I now enjoy financial freedom like I’ve never know before doing what I love.
                                </p>
                            </article>

                        </div>

                    </div>

                </div>

            </Slider>
        </>
        )
    }
}

export default Testimonial;