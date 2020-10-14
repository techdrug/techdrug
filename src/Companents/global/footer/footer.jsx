import React from 'react';
import './style.scss'
import {Image,Container,Row,Col} from 'react-bootstrap';
import imgge0 from '../../../assets/svg/footerlogo.svg';
import imgge1 from '../../../assets/svg/latpo.svg';
import facebbok from '../../../assets/svg/facebook.svg';
import twiter from '../../../assets/svg/twitter.svg';
import youtube from '../../../assets/svg/youtube.svg';


class Footer extends React.Component{
    render(){
        return(
            <div className="footer-wrapper">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="footer-logo">
                                <Image src={imgge0} alt="sd" fluid/>
                            </div>
                            <div className="footer-image pt-4">
                                <Image src={imgge1} alt="sd" fluid/>
                            </div>
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col md={3}>
                                    <div className="footer-nav">
                                        <ul className="footer-nav-list">
                                            <li className="footer-nav-item"><a href="/courses">Courses</a></li>
                                            <li className="footer-nav-item"><a href="/quizzes">Practice</a></li>
                                            <li className="footer-nav-item"><a href="/blog">Blog</a></li>
                                            <li className="footer-nav-item"><a href="/training">Training</a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="footer-nav">
                                        <ul className="footer-nav-list">
                                            <li className="footer-nav-item"><a href="/terms">Terms of Use</a></li>
                                            <li className="footer-nav-item"><a href="/privacy">Privacy Policy</a></li>
                                            <li className="footer-nav-item"><a href="/sitemap.xml">Sitemap</a></li>
                                            <li className="footer-nav-item"><a href="/about">About</a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="footer-subscribe">
                                        <p>Subscribe to our newsletter and instantly get 10 tips on Magento 2 development</p>
                                        <form>
                                            <input type="email" name="email" aria-describedby="subscribe" placeholder="Enter your email..."  />
                                            <button className="common-button--red" type="button">Subscribe</button>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={9}>
                                    <p>As the ultimate resource for Magento 2 developers, Mage Mastery produces weekly lessons so you can learn what you need to succeed as a Magento Developer.</p>
                                    <p><a href="/#" className="learn-more">Learn More</a></p>
                                </Col>
                                <Col md={3}>
                                    <div className="social-media">
                                        <a href="/#"><Image src={facebbok} alt="s0"/></a>
                                        <a href="/#"><Image src={twiter} alt="s5"/></a>
                                        <a href="/#"><Image src={youtube} alt="s5"/></a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>                 
            </div>
        )
    }
}

export default Footer;