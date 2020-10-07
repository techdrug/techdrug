import React from 'react'
import Header from '../global/headernav'
import {Helmet} from "react-helmet";
import {Container,Row,Button} from 'react-bootstrap'
import SimpleSlider from '../inc/sliderCom/slider';
import PortFolio from '../inc/portfolio/portfolio';
import Brands from '../inc/brands/brands';
import images from '../../assets/images/programming-concept-illustration_114360-1351-min.png'
import images0 from '../../assets/images/barcelona-design-e1555918754720.png'
var sliderContent = [
    {id: 'one',link:'#', img:images, title: 'Your Text Here',desciption:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
    {id: 'two',link:'#', img:images, title: 'Your Text Here',desciption:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
  ];

class Home extends React.Component{
    render(){
        return(
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home</title>
                </Helmet>
                <Header />
                <SimpleSlider sliderAttr={sliderContent}/>
                <div className="brands section">
                    <Container>
                        <div className="section-wrapper text-center">
                            <h2 className="section-title">Our Brands</h2>
                        </div>
                        <div className="inner-brander-wrapper">
                            <Row>
                                <Brands image={images0}/>
                                <div className="btn-warapper text-right button-bt-wrapper">
                                    <Button className="main-btn main-color"><span className="slash"></span>View More</Button>
                                </div>
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className="portfolio">
                    <PortFolio/>
                </div>
            </>
        )
    }
}

export default Home;