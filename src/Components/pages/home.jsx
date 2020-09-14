import React from 'react';
import sideImage from '../../assets/img/hero-img.png'

class Home extends React.Component {
  render() {
    return (
            <section id="hero" className="d-flex align-items-center">
                    <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <h1>Better Solutions For Your Business</h1>
                    <h2>We are team of talanted designers making websites with Bootstrap</h2>
                    <div className="d-lg-flex">
                        <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox btn-watch-video vbox-item" data-vbtype="video" data-autoplay="true"> Watch Video <i className="icofont-play-alt-2"></i></a>
                    </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <img src={sideImage} className="img-fluid animated" alt="" />
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default Home;