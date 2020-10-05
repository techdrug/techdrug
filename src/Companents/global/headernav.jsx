import React from 'react'
import { Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'
import CusButton from '../inc/cusbuttom'
class Header extends React.Component{
    state = {
        isTop: false,
      };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY > 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    render(){
        console.log(this.state.isTop)
        return(
            <>
                <Navbar bg="light" expand="lg" className={`main-header ${this.state.isTop ? 'stick-nav': 'stick-remove'}`}>
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
                            <Nav.Link href="#link">Team</Nav.Link>
                            <Nav.Link href="#link">About us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <CusButton name="Hire Us" btnClass="banner-btn main-btn"/>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header;