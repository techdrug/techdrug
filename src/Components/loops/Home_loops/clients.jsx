import React from 'react';

import Image_1 from '../../../assets/img/clients/client-1.png'
import Image_2 from '../../../assets/img/clients/client-1.png'
import Image_3 from '../../../assets/img/clients/client-3.png'
import Image_4 from '../../../assets/img/clients/client-4.png'
import Image_5 from '../../../assets/img/clients/client-5.png'
import Image_6 from '../../../assets/img/clients/client-6.png'

class Clients extends React.Component {
    render()
    {
        return(
            <section id="cliens" className="cliens section-bg">
                  <div className="container">

                    <div className="row" data-aos="zoom-in">

                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Image_1} className="img-fluid" alt="" />
                      </div>

                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Image_2} className="img-fluid" alt="" />
                      </div>

                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Image_3} className="img-fluid" alt="" />
                      </div>

                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Image_4} className="img-fluid" alt="" />
                      </div>

                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Image_5} className="img-fluid" alt="" />
                      </div>

                      <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={Image_6} className="img-fluid" alt="" /> 
                      </div>

                    </div>

                  </div>
               
                </section>
        )
    }
}

export default Clients;