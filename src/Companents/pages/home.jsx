import React from 'react'
import Header from '../global/header/headernav'
import Footer from '../global/footer/footer'
import {Helmet} from "react-helmet";
import {Container,Row,Button} from 'react-bootstrap'
import SimpleSlider from '../inc/sliderCom/slider';
import PortFolio from '../inc/portfolio/portfolio';
import Brands from '../inc/brands/brands';
import Testimonial from '../inc/testimonial/testimonial'
import images from '../../assets/images/cube-52c643decb7358c9218b0b522304f070.svg'
import images0 from '../../assets/images/barcelona-design-e1555918754720.png'
import imagePort from '../../assets/images/magento-2-for-beginners-2.png'

// var sliderContent = [
//     {id: 'one',link:'#', img:images, title: 'Your Text Here',desciption:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
//     {id: 'two',link:'#', img:images, title: 'Your Text Here',desciption:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
// ];
// var portfolio = [
//     {id: 'one',link:'#', img:images, title: 'Your Text Here',desciption:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
//     {id: 'two',link:'#', img:images, title: 'Your Text Here',desciption:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
// ];

class Home extends React.Component{
    state = {
        Portfolios:[
            { id: 1, title:'Magento 2 for Beginners',technologies:['html','css','Javascript','Scss','Php'],thumbnail:imagePort,link:'#'},
            { id: 2, title:'Wordpress Theme builder',technologies:['html','css','Javascript','Scss','Php'],thumbnail:imagePort,link:'#'},
            { id: 3, title:'Laravel custom',technologies:['html','css','Javascript','Scss','Php'],thumbnail:imagePort,link:'#' }
        ],
        sliderContents: [
            {id: 'one',link:'#', img:images, title: 'Your Text Here',desciption:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
            {id: 'two',link:'#', img:images, title: 'Your Text Here',desciption:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},        
            {id: 'three',link:'#', img:images, title: 'Your Text Here',desciption:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},        
        ]
    }
    render(){
        return(
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Free Web tutorials" />
                    <meta name="keywords" content="HTML, CSS, JavaScript" />
                    <meta name="author" content="John Doe" />
                    <title>Home</title>

                </Helmet>
                <Header />
                <SimpleSlider sliderAttr={this.state.sliderContents}/>
                <div className="brands section">
                    <Container>
                        <div className="section-wrapper">
                            <h2 className="section-title">Our Brands</h2>
                        </div>
                        <div className="inner-brander-wrapper">
                            <Row>
                                <Brands image={images0}/>
                            </Row>
                            <div className="btn-warapper text-left button-bt-wrapper">
                                <Button className="main-btn main-color"><span className="slash"></span>View More</Button>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="portfolio section">
                    <Container>
                        <div className="section-wrapper">
                            <h2 className="section-title">Our Projects</h2>
                        </div>
                        <PortFolio portLists={this.state.Portfolios}/>
                        <div className="btn-warapper text-left button-bt-wrapper">
                            <Button className="main-btn main-color"><span className="slash"></span>View More</Button>
                        </div>
                    </Container>
                </div>
                <div className="Testimonial section">
                    <Container>
                        <div className="section-wrapper">
                            <h2 className="section-title">Our Testimonial</h2>
                        </div>
                        <Testimonial/>
                        <div className="btn-warapper text-left button-bt-wrapper">
                            <Button className="main-btn main-color"><span className="slash"></span>View More</Button>
                        </div>
                    </Container>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Home;