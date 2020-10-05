import React from 'react'
import Header from '../global/headernav'
import {Container} from 'react-bootstrap'
import SimpleSlider from '../inc/sliderCom/slider';
import PortFolio from '../inc/portfolio/portfolio';
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
                <Header />
                <SimpleSlider sliderAttr={sliderContent}/>
                <div className="brands section">
                    <Container>
                        <div className="section-wrapper text-center">
                            <h2 className="section-title">Our Brands</h2>
                        </div>
                        <div className="inner-brander-wrapper">
                            <ul className="d-flex">
                                <li><img src={images0} alt="mystl" className="img-fluid"/></li>
                                <li><img src={images0} alt="mystl" className="img-fluid"/></li>
                                <li><img src={images0} alt="mystl" className="img-fluid"/></li>
                                <li><img src={images0} alt="mystl" className="img-fluid"/></li>
                                <li><img src={images0} alt="mystl" className="img-fluid"/></li>
                                <li><img src={images0} alt="mystl" className="img-fluid"/></li>
                                <li><img src={images0} alt="mystl" className="img-fluid"/></li>
                            </ul>
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