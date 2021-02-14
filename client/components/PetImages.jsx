import Carousel from 'react-bootstrap/Carousel'
import React from 'react';


function PetImages(props){
  return(
    <Carousel>
      <Carousel.Item>
        <img 
        className="d-block w-25"
        src= {props.images}
        alt="Puppy"
        />
      </Carousel.Item>   
    </Carousel> 
     
        
  )
}

export default PetImages;