import React from 'react';
import {Row,Col,Image} from 'react-bootstrap';
import './style.scss';
import image0 from '../../../assets/images/magento-2-for-beginners-2.png'

class Portfolio extends React.Component{
    render(){
        const {listings} = this.props;
        return(
            <>
                <Row className="portfolio-row">
                  
                    <Col md={4}>
                        <div className="box">
                            <div className="box-label">
                                <div className="label-bg"></div> 
                                <span className="label-text">Web Deisgn</span>
                            </div>
                            <div className="box-thumnails">
                            <Image src={image0} fluid/>
                            </div>
                            <div className="box-content">
                                <h3>Magento 2 for Beginners</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="box">
                            <div className="box-label">
                                <div className="label-bg"></div> 
                                <span className="label-text">Shopify</span>
                            </div>
                            <div className="box-thumnails">
                            <Image src={image0} fluid/>
                            </div>
                            <div className="box-content">
                                <h3>Magento 2 for Beginners</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="box">
                            <div className="box-label">
                                <div className="label-bg"></div> 
                                <span className="label-text">Wordpress</span>
                            </div>
                            <div className="box-thumnails">
                            <Image src={image0} fluid/>
                            </div>
                            <div className="box-content">
                                <h3>Magento 2 for Beginners</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Portfolio;