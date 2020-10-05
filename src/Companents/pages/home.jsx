import React from 'react'
import Header from '../global/headernav'
import SimpleSlider from '../inc/slider';

class Home extends React.Component{
    render(){
        return(
            <>
                <Header />
                <SimpleSlider />
            </>
        )
    }
}

export default Home;