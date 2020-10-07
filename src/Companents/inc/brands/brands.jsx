import React from 'react';
import {Card,Col} from 'react-bootstrap';

class Brands extends React.Component{
    render(){
        return(
            <>
                <Col xs={2}>
                    <Card>
                        <Card.Img variant="top" src={this.props.image} />
                        <Card.Body>
                            <Card.Title>John Stone</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card>
                        <Card.Img variant="top" src={this.props.image} />
                        <Card.Body>
                            <Card.Title>Ponnappa Priya</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card>
                        <Card.Img variant="top" src={this.props.image} />
                        <Card.Body>
                            <Card.Title>Mia Wong</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card>
                        <Card.Img variant="top" src={this.props.image} />
                        <Card.Body>
                            <Card.Title>Peter Stanbridge</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card>
                        <Card.Img variant="top" src={this.props.image} />
                        <Card.Body>
                            <Card.Title>Ang Li</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <Card>
                        <Card.Img variant="top" src={this.props.image} />
                        <Card.Body>
                            <Card.Title>Nguta Ithya</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
               
            </>
        )
    }
}
export default Brands;