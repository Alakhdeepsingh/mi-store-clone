import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css'; 
const Slider = ({start}) => {
    return (
        <Carousel fade>
{/* map is used to traversal in js */}
       {start.map((item,index)=>(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={item}
              alt="First slide"
            />
          </Carousel.Item>
       ))}
       
      </Carousel>
    )
}

export default Slider;
