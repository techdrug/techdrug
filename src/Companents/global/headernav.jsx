import React from 'react'
import { Container,Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import CusButton from '../inc/cusbuttom'
class Header extends React.Component{
    render(){
        return(
            <>
                <Navbar bg="light" expand="lg" className="main-header">
                    <Container>
                        <Navbar.Brand href="#home">Learning IT</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.3">Services</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Portfolio</Nav.Link>
                            <Nav.Link href="#link">Why choose us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <CusButton name="Contact" btnClass="banner-btn main-btn"/>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header;