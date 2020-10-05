import React from 'react';
import {Button} from 'react-bootstrap';

class CusButtom extends React.Component{
    render(){
        const {name,btnClass} =  this.props
        return(
            <Button className={btnClass}>{name}</Button>
        )
    }
}
export default CusButtom;